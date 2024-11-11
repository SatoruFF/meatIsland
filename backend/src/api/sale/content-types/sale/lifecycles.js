const axios = require("axios");

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

    // Формируем список продуктов и рассчитываем общую сумму
    const productsList = orderProducts
      .map((product, i) => {
        const productTotal = product.product.price * product.quantity;
        totalAmount += productTotal;

        return `${i + 1}. ${product.product.name} - ${
          product.product.price
        } руб. Кол-во: ${product.quantity} (Сумма: ${productTotal} руб.)`;
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
