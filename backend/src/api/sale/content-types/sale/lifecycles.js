const axios = require("axios");

module.exports = {
  async afterCreate(event) {
    const { result } = event;

    const chatId = process.env.CHAT_ID;
    const token = process.env.TOKEN_TG;

    // Получаем список ID продуктов
    const productIds = result.products;

    // Запрашиваем детали каждого продукта по его ID
    const productDetails = await Promise.all(
      productIds.map(async (id) => {
        const product = await strapi.query("product").findOne({ id });
        return product ? product.name : `Товар ID ${id}`;
      })
    );

    const message = `
   📦 Новый заказ на Мясном острове!

   Имя клиента: ${result.name}
   Телефон: ${result.phone}
   Метод доставки: ${result.deliveryMethod}
   Адрес: ${result.address}, этаж: ${result.floor}, домофон: ${result.intercom}

   🛒 Продукты:
   ${productDetails.join("\n")}
       `;

    // Отправляем сообщение в Telegram
    await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
      chat_id: chatId,
      text: message,
    });
  },
};
