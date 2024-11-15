const axios = require("axios");

const optSale = 10000

module.exports = {
  async afterCreate(event) {
    const { result } = event;

    const chatId = process.env.CHAT_ID;
    const token = process.env.TOKEN_TG;

    if (!chatId || !token) {
      console.error("Ошибка: CHAT_ID или TOKEN_TG не определены.");
      return;
    }

    const orderProducts = await strapi.entityService.findMany(
      "api::order-product.order-product",
      {
        filters: {
          order: result.id,
        },
        populate: ["product"],
      }
    );

    let totalAmount = 0;

      let totalAmountWithSale = 0

    // Получаем категории продуктов
    for (const orderProduct of orderProducts) {
      const { product } = orderProduct;

      // Делаем запрос для получения категории текущего продукта
      const productDetails = await strapi.entityService.findOne(
        "api::product.product",
        product.id,
        { populate: ["category"] }
      );

      // Добавляем категорию в объект продукта
      orderProduct.product.category = productDetails.category;
    }

    const productsList = orderProducts
      .map((orderProduct, i) => {
        const { product, quantity } = orderProduct;
        const productTotal = product.price * quantity;
        totalAmount += productTotal;

        // Проверяем категорию
        const isSemiFinished = product.category?.name === "Полуфабрикаты";
        const discountRate = isSemiFinished ? 0.85 : 0.80; // 15% или 20%
        const productTotalWithSale =
          totalAmount > optSale ? productTotal * discountRate : productTotal;

        totalAmountWithSale += productTotalWithSale;

        return `${i + 1}. ${product.name} - ${product.price} руб. Кол-во: ${
          quantity
        } (Сумма: ${productTotal} руб.) ${
          totalAmount > optSale
            ? `(Со скидкой: ${productTotalWithSale.toFixed(2)} руб.)`
            : ""
        }`;
      })
      .join("\n\n");

    // Формируем сообщение
    const message = `
📦 Новый заказ на Мясном острове!

👤 Имя клиента: ${result.name}
📞 Телефон: ${result.phone}
🚚 Метод доставки: ${
      result.deliveryMethod === "delivery" ? "Доставка" : "Самовывоз"
    }
📍 Адрес: ${result.address} ${result.floor ? ` этаж: ${result.floor}` : ""} ${
      result.intercom ? ` Домофон: ${result.intercom}` : ""
    }

💬 Комментарий: ${result.comment || "Нет комментария"}

🛒 Продукты:

${productsList}

💵 Общая сумма заказа: ${totalAmount} руб.
`;

    // Отправляем сообщение в Telegram
    try {
      await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
        chat_id: chatId,
        text: message.trim(),
      });
    } catch (error) {
      console.error(
        "Ошибка при отправке сообщения в Telegram:",
        error.response?.data || error.message
      );
    }
  },
};
