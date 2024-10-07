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
    description:
      "Традиционные вареники с картофельным пюре — идеальный выбор для любителей домашней кухни.",
  },
  {
    name: "Вареники (с творогом)",
    trade_price: 350.4,
    price: 438.0,
    category: 7,
    available: true,
    description:
      "Сладкие вареники с нежным творогом — популярный десерт на любом столе.",
  },
  {
    name: "Вареники, мясо со свежей капустой (50/50)",
    trade_price: 398.4,
    price: 498.0,
    category: 7,
    available: true,
    description:
      "Вкусное сочетание мясной начинки и свежей капусты в классических варениках.",
  },
  {
    name: "Манты из телятины (с картошкой)",
    trade_price: 518.4,
    price: 648.0,
    category: 1,
    available: true,
    description:
      "Сочные манты с начинкой из телятины и картофеля — кавказское угощение на вашем столе.",
  },
  {
    name: "Пельмени из баранины",
    trade_price: 510.4,
    price: 638.0,
    category: 3,
    available: true,
    description:
      "Ароматные пельмени с начинкой из баранины — вкус традиций на каждый день.",
  },
  {
    name: "Пельмени из индейки",
    trade_price: 502.4,
    price: 628.0,
    category: 4,
    available: true,
    description:
      "Диетические пельмени с нежной индейкой — лёгкое и полезное блюдо.",
  },
  {
    name: "Пельмени из телятины",
    trade_price: 478.4,
    price: 598.0,
    category: 1,
    available: true,
    description:
      "Классические пельмени с сочной телятиной — простота и вкус в каждой порции.",
  },
  {
    name: "Пельмени куриные",
    trade_price: 454.4,
    price: 568.0,
    category: 2,
    available: true,
    description:
      "Нежные пельмени с куриным фаршем — идеальны для быстрого обеда или ужина.",
  },
  {
    name: "Пельмени телятина/баранина",
    trade_price: 486.4,
    price: 608.0,
    category: 1,
    available: true,
    description:
      "Сочетание телятины и баранины в пельменях — насыщенный вкус и аромат.",
  },
  {
    name: "Пельмени телятина/курица",
    trade_price: 470.4,
    price: 588.0,
    category: 1,
    available: true,
    description:
      "Микс телятины и курицы в пельменях — гармония вкусов в одном блюде.",
  },
  {
    name: "Манты из баранины (с картошкой)",
    trade_price: 526.4,
    price: 658.0,
    category: 3,
    available: true,
    description:
      "Манты с начинкой из баранины и картошки — сытное и вкусное кавказское блюдо.",
  },
  {
    name: "Треугольники с телятиной",
    trade_price: 438.4,
    price: 548.0,
    category: 1,
    available: true,
    description:
      "Треугольные пирожки с телятиной — идеальны для перекуса или в качестве закуски.",
  },
  {
    name: "Пельмени маленькие из телятины (Дюшбара)",
    trade_price: 558.4,
    price: 698.0,
    category: 1,
    available: true,
    description:
      "Миниатюрные пельмени с телятиной — традиционное блюдо восточной кухни.",
  },
  {
    name: "Пельмени маленькие из курицы (Радуга)",
    trade_price: 550.4,
    price: 688.0,
    category: 2,
    available: true,
    description:
      "Мини-пельмени с курицей — лёгкий перекус или полноценное блюдо для всей семьи.",
  },
  {
    name: "Сырники",
    trade_price: 358.4,
    price: 448.0,
    category: 8,
    available: true,
    description:
      "Сырники из творога — классический завтрак, богатый белком и кальцием.",
  },
  {
    name: "Хинкали из телятины",
    trade_price: 478.4,
    price: 598.0,
    category: 1,
    available: true,
    description:
      "Традиционные грузинские хинкали с начинкой из телятины — сочное мясо в каждом кусочке.",
  },
  {
    name: "Хинкали из баранины",
    trade_price: 486.4,
    price: 608.0,
    category: 3,
    available: true,
    description:
      "Ароматные хинкали с бараниной — насыщенный вкус грузинской кухни.",
  },
  {
    name: "Элеш",
    trade_price: 438.4,
    price: 548.0,
    category: 8,
    available: true,
    description:
      "Элеш — традиционный татарский пирог с начинкой из мяса и картофеля.",
  },
  {
    name: "Блины с творогом",
    trade_price: 350.4,
    price: 438.0,
    category: 8,
    available: true,
    description:
      "Нежные блины с творогом — идеальны для завтрака или полдника.",
  },
  {
    name: "Блины с мясом",
    trade_price: 441.6,
    price: 552.0,
    category: 8,
    available: true,
    description:
      "Сытные блины с мясной начинкой — вкусное и питательное блюдо.",
  },
  {
    name: "Котлеты куриные",
    trade_price: 470.4,
    price: 588.0,
    category: 2,
    available: true,
    description:
      "Куриные котлеты — классическое блюдо на обед или ужин, богатое белком.",
  },
  {
    name: "Перец фаршированный (телятина с рисом)",
    trade_price: 502.4,
    price: 628.0,
    category: 1,
    available: true,
    description:
      "Фаршированный перец с телятиной и рисом — питательное и вкусное блюдо.",
  },
  {
    name: "Голубцы из телятины (мясо с рисом)",
    trade_price: 478.4,
    price: 598.0,
    category: 1,
    available: true,
    description:
      "Телятина с рисом, завернутая в капустные листья — традиционные голубцы.",
  },
  {
    name: "Фрикадельки домашние из телятины",
    trade_price: 478.4,
    price: 598.0,
    category: 1,
    available: true,
    description:
      "Домашние фрикадельки из телятины — нежные и сочные, идеально подходят для супов и паст.",
  },
  {
    name: "Котлеты домашние из телятины",
    trade_price: 486.4,
    price: 608.0,
    category: 1,
    available: true,
    description: "Домашние котлеты из телятины — классика на обеденном столе.",
  },
  {
    name: "Ёжики (телятина с рисом)",
    trade_price: 478.4,
    price: 598.0,
    category: 1,
    available: true,
    description:
      "Ёжики из телятины с рисом — нежные мясные шарики, которые любят и дети, и взрослые.",
  },
  {
    name: "Нагетсы куриные Халяль",
    trade_price: 486.4,
    price: 608.0,
    category: 2,
    available: true,
    description:
      "Халяльные куриные наггетсы — хрустящее угощение с нежной курицей внутри.",
  },
  {
    name: "Люля-кебаб из телятины",
    trade_price: 502.4,
    price: 628.0,
    category: 1,
    available: true,
    description:
      "Классический люля-кебаб из телятины — ароматное и сытное блюдо восточной кухни.",
  },
  {
    name: "Люля-кебаб из баранины",
    trade_price: 558.4,
    price: 698.0,
    category: 3,
    available: true,
    description:
      "Люля-кебаб из баранины — богатый вкус и традиции востока в каждом кусочке.",
  },
  {
    name: "Купаты из телятины",
    trade_price: 558.4,
    price: 698.0,
    category: 1,
    available: true,
    description:
      "Купаты из телятины — сочные колбаски для гриля или сковороды, идеально подходят для пикника.",
  },
  {
    name: "Купаты куриные",
    trade_price: 478.4,
    price: 598.0,
    category: 2,
    available: true,
    description:
      "Куриные купаты — лёгкий и полезный выбор для гриля или сковороды.",
  },
  {
    name: "Купаты телятина/курица",
    trade_price: 526.4,
    price: 658.0,
    category: 1,
    available: true,
    description:
      "Купаты с телятиной и курицей — нежное мясо в пряной оболочке, идеально для обеда на природе.",
  },
  {
    name: "Купаты телятина/баранина",
    trade_price: 571.2,
    price: 714.0,
    category: 1,
    available: true,
    description:
      "Сочетание телятины и баранины в купатах — насыщенный вкус и питательность.",
  },
  {
    name: "Купаты из индейки",
    trade_price: 558.4,
    price: 698.0,
    category: 4,
    available: true,
    description:
      "Нежные и сочные купаты из индейки — идеальны для диетического питания.",
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
      console.log("Categories were inserted into db");

      for (let product of products) {
        let existingProduct = await strapi.db
          .query("api::product.product")
          .findOne({
            where: {
              name: product.name,
            },
          });
        if (!existingProduct) {
          await strapi.db.query("api::product.product").create({
            data: {
              name: product.name,
              trade_price: product.trade_price,
              price: product.price,
              available: product.available,
              category: categoryMap[product.category],
              description: product.description,
            },
          });
        } else {
          console.log(`Product "${product.name}" already exists, skipping.`);
        }
      }
      console.log("Products were inserted into db");
    });
  },
};
