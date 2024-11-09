"use strict";

/**
 * sale controller
 */

// Common use
const { createCoreController } = require("@strapi/strapi").factories;
// module.exports = createCoreController('api::sale.sale');

const isObject = (value) => {
  return typeof value === "object" && !Array.isArray(value) && value !== null;
};

const isNumber = (val) => typeof val === "number";

// TODO: Переименовать в order, а не sale
module.exports = createCoreController("api::sale.sale", ({ strapi }) => ({
  async create(ctx) {
    const { data } = ctx.request.body;
    const { products, ...orderData } = data;

    const validatedProducts = products.map((item) => {
      if (isNumber(item)) {
        return item;
      } else if (item.product && isNumber(item.product)) {
        return item.product;
      } else {
        throw new Error("Unexpected format for product");
      }
    });

    // Создаем заказ
    const order = await strapi.entityService.create("api::sale.sale", {
      data: { ...orderData, products: validatedProducts },
    });

    // Создаем записи для каждого товара в order-product
    for (const item of products) {
      const orderIsValid = isObject(item) && item.hasOwnProperty("product");

      if (orderIsValid && (!item.quantity || item.quantity <= 0)) {
        item.quantity = 1;
      }

      orderIsValid &&
        (await strapi.entityService.create("api::order-product.order-product", {
          data: {
            order: order.id,
            product: item.product,
            quantity: item.quantity,
          },
        }));
    }

    return { data: order };
  },
}));
