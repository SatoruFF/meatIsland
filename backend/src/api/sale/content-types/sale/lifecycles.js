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
    const productsList = result.products
      .map(
        (product, i) =>
          `${i + 1}. ${product.name} - ${product.price} руб. Кол-во: ${
            product.weight ? product.weight : 1
          }`
      )
      .join("\n\n");

    const message = `
    📦 Новый заказ на Мясном острове!

👤 Имя клиента: ${result.name}
📞 Телефон: ${result.phone}
🚚 Метод доставки: ${
      result.deliveryMethod === "delivery" ? "Доставка" : "Самовызов"
    }
📍 Адрес: ${result.address} ${result.floor ? ` этаж: ${result.floor}` : ""} ${
      result.intercom ? ` домофон: ${result.intercom}` : ""
    }

🛒 Продукты:

${productsList}
        `;

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
