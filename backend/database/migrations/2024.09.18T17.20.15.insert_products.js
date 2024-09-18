"use strict";

const categories = [
  { id: 1, name: "Говядина" },
  { id: 2, name: "Курица" },
  { id: 3, name: "Баранина" },
  { id: 4, name: "Индейка" },
  { id: 5, name: "Фарш" },
  { id: 6, name: "Пельмени" },
  { id: 7, name: "Вареники" },
  { id: 8, name: "Прочее" },
];

const products = [
  {
    name: "Вареники (с картофельным пюре)",
    trade_price: 350.4,
    price: 438.0,
    category: 7,
    available: true,
  },
  {
    name: "Вареники (с творогом)",
    trade_price: 350.4,
    price: 438.0,
    category: 7,
    available: true,
  },
  {
    name: "Вареники, мясо со свежей капустой (50/50)",
    trade_price: 398.4,
    price: 498.0,
    category: 7,
    available: true,
  },
  {
    name: "Манты из телятины (с картошкой)",
    trade_price: 518.4,
    price: 648.0,
    category: 1,
    available: true,
  },
  {
    name: "Пельмени из баранины",
    trade_price: 510.4,
    price: 638.0,
    category: 3,
    available: true,
  },
  {
    name: "Пельмени из индейки",
    trade_price: 502.4,
    price: 628.0,
    category: 4,
    available: true,
  },
  {
    name: "Пельмени из телятины",
    trade_price: 478.4,
    price: 598.0,
    category: 1,
    available: true,
  },
  {
    name: "Пельмени куриные",
    trade_price: 454.4,
    price: 568.0,
    category: 2,
    available: true,
  },
  {
    name: "Пельмени телятина/баранина",
    trade_price: 486.4,
    price: 608.0,
    category: 1,
    available: true,
  },
  {
    name: "Пельмени телятина/курица",
    trade_price: 470.4,
    price: 588.0,
    category: 1,
    available: true,
  },
  {
    name: "Манты из баранины (с картошкой)",
    trade_price: 526.4,
    price: 658.0,
    category: 3,
    available: true,
  },
  {
    name: "Треугольники с телятиной",
    trade_price: 438.4,
    price: 548.0,
    category: 1,
    available: true,
  },
  {
    name: "Пельмени маленькие из телятины (Дюшбара)",
    trade_price: 558.4,
    price: 698.0,
    category: 1,
    available: true,
  },
  {
    name: "Пельмени маленькие из курицы (Радуга)",
    trade_price: 550.4,
    price: 688.0,
    category: 2,
    available: true,
  },
  {
    name: "Сырники",
    trade_price: 358.4,
    price: 448.0,
    category: 8,
    available: true,
  },
  {
    name: "Хинкали из телятины",
    trade_price: 478.4,
    price: 598.0,
    category: 1,
    available: true,
  },
  {
    name: "Хинкали из баранины",
    trade_price: 486.4,
    price: 608.0,
    category: 3,
    available: true,
  },
  {
    name: "Элеш",
    trade_price: 438.4,
    price: 548.0,
    category: 8,
    available: true,
  },
  {
    name: "Блины с творогом",
    trade_price: 350.4,
    price: 438.0,
    category: 8,
    available: true,
  },
  {
    name: "Блины с мясом",
    trade_price: 441.6,
    price: 552.0,
    category: 8,
    available: true,
  },
  {
    name: "Котлеты куриные",
    trade_price: 470.4,
    price: 588.0,
    category: 2,
    available: true,
  },
  {
    name: "Перец фаршированный (телятина с рисом)",
    trade_price: 502.4,
    price: 628.0,
    category: 1,
    available: true,
  },
  {
    name: "Голубцы из телятины (мясо с рисом)",
    trade_price: 478.4,
    price: 598.0,
    category: 1,
    available: true,
  },
  {
    name: "Фрикадельки домашние из телятины",
    trade_price: 478.4,
    price: 598.0,
    category: 1,
    available: true,
  },
  {
    name: "Котлеты домашние из телятины",
    trade_price: 486.4,
    price: 608.0,
    category: 1,
    available: true,
  },
  {
    name: "Ёжики (телятина с рисом)",
    trade_price: 478.4,
    price: 598.0,
    category: 1,
    available: true,
  },
  {
    name: "Нагетсы куриные Халяль",
    trade_price: 486.4,
    price: 608.0,
    category: 2,
    available: true,
  },
  {
    name: "Люля-кебаб из телятины",
    trade_price: 502.4,
    price: 628.0,
    category: 1,
    available: true,
  },
  {
    name: "Люля-кебаб из баранины",
    trade_price: 558.4,
    price: 698.0,
    category: 3,
    available: true,
  },
  {
    name: "Купаты из телятины",
    trade_price: 558.4,
    price: 698.0,
    category: 1,
    available: true,
  },
  {
    name: "Купаты куриные",
    trade_price: 478.4,
    price: 598.0,
    category: 2,
    available: true,
  },
  {
    name: "Купаты телятина/курица",
    trade_price: 526.4,
    price: 658.0,
    category: 1,
    available: true,
  },
  {
    name: "Купаты телятина/баранина",
    trade_price: 571.2,
    price: 714.0,
    category: 1,
    available: true,
  },
  {
    name: "Купаты из индейки",
    trade_price: 558.4,
    price: 698.0,
    category: 4,
    available: true,
  },
];

module.exports = {
  async up() {
    await strapi.db.transaction(async () => {
      const categoryMap = {};
      for (let category of categories) {
        let existingCategory = await strapi.db
          .query("api::category.category")
          .findOne({ where: { name: category.name } });
        if (!existingCategory) {
          const createdCategory = await strapi.db
            .query("api::category.category")
            .create({
              data: {
                name: category.name,
              },
            });
          categoryMap[category.id] = createdCategory.id;
        } else {
          categoryMap[category.id] = existingCategory.id;
        }
      }
      console.log("Categories was inserted in db");

      for (let product of products) {
        let existingProduct = await strapi.db
          .query("api::product.product")
          .findOne({
            where: {
              name: product.name,
            },
          });
        if (!existingProduct) {
          await strapi.db
          .query("api::product.product").create({
            data: {
              name: product.name,
              trade_price: product.trade_price,
              price: product.price,
              available: product.available,
              category: categoryMap[product.category],
            }

          });
        } else {
          console.log(`Product "${product.name}" already exists, skipping.`);
        }
      }
      console.log("Products was inserted in db");
    });
  },
};
