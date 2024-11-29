"use strict";

const { createCoreController } = require("@strapi/strapi").factories;

const isObject = (value) =>
  typeof value === "object" && !Array.isArray(value) && value !== null;
const isNumber = (val) => typeof val === "number";

module.exports = createCoreController("api::sale.sale", ({ strapi }) => ({
  async create(ctx) {
    const { data } = ctx.request.body;
    const { products, ...orderData } = data;

    let validatedProducts = [];
    let orderProducts = [];

    if (
      Array.isArray(products) &&
      products.every((item) => isNumber(item) == item)
    ) {
      // 1. Массив с ID продуктов - привязываем существующие связи `order-product`
      validatedProducts = products; // Используем как есть
    } else if (Array.isArray(products) && products.every(isObject)) {
      // 2. Массив объектов - создаем новые связи `order-product` с количеством
      for (const item of products) {
        if (isObject(item) && item.product) {
          if (!item.quantity || item.quantity <= 0) {
            item.quantity = 1; // Устанавливаем количество по умолчанию
          }

          // Создаем запись `order-product`
          const orderProduct = await strapi.entityService.create(
            "api::order-product.order-product",
            {
              data: {
                product: item.product,
                quantity: item.quantity,
              },
            }
          );

          orderProducts.push(orderProduct);
          validatedProducts.push(orderProduct.id);
        } else {
          throw new Error("Unexpected format for product");
        }
      }
    } else {
      throw new Error("Invalid format for products");
    }

    // Создаем `sale` и привязываем `order-products`
    const order = await strapi.entityService.create("api::sale.sale", {
      data: { ...orderData, products: validatedProducts },
    });

    // Привязываем созданные `order-products` к заказу
    if (orderProducts.length > 0) {
      for (const orderProduct of orderProducts) {
        await strapi.entityService.update(
          "api::order-product.order-product",
          orderProduct.id,
          {
            data: { sale: order.id },
          }
        );
      }
    }

    return { data: { ...order, orderProducts } };
  },
}));
