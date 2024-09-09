import { create } from "zustand";
import _ from "lodash";

type Basket = {
  title: string;
  id: string;
  price: number;
  description: string;
  weight: string;
  quantity: number;
};

type StoreState = {
  basket: { [key: number]: Basket };
  addToCart: (itemId: string) => void;
  removeFromCart: (itemId: string) => void;
  increaseQuantity: (itemId: string) => void;
  decreaseQuantity: (itemId: string) => void;
  getTotalPrice: () => number;
};

const basket: { [key: number]: Basket } = {
  1: {
    title: "Мясо",
    id: "1",
    price: 500,
    description:
      "Свежая говядина высшего сорта, идеально подходит для жарки и тушения.",
    weight: "1 кг",
    quantity: 2,
  },
  2: {
    title: "Колбаса",
    id: "2",
    price: 350,
    description:
      "Колбаса с натуральными специями, сделана по традиционному рецепту.",
    weight: "0.5 кг",
  },
  3: {
    title: "Пельмени",
    id: "3",
    price: 250,
    description:
      "Домашние пельмени с сочным мясным фаршем, идеальный выбор для быстрого ужина.",
    weight: "1 кг",
  },
  4: {
    title: "Фарш",
    id: "4",
    price: 400,
    description:
      "Смесь из свежей свинины и говядины, идеально подходит для котлет и других блюд.",
    weight: "1 кг",
  },
};

const basketStore = create<StoreState>((set, get) => ({
  basket,

  // Добавление товара в корзину
  addToCart: (itemId) =>
    set((state) => {
      const existingItem = _.find(state.basket, (item) => item.id === itemId);
      if (existingItem) {
        return {
          basket: state.basket.map((item) =>
            item.itemId === itemId
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return { basket: [...state.basket, { itemId, quantity: 1 }] };
    }),

  // Удаление товара из корзины
  removeFromCart: (itemId) =>
    set((state) => ({
      basket: _.filter(state.basket, (item) => item.id !== itemId),
    })),

  // Увеличение количества товара
  increaseQuantity: (itemId) =>
    set((state) => ({
      basket: _.map(state.basket, (item) =>
        item.id === itemId
          ? { ...item, quantity: (item?.quantity || 1) + 1 }
          : item
      ),
    })),

  // Уменьшение количества товара
  decreaseQuantity: (itemId) =>
    set((state) => ({
      basket: _.map(state.basket, (item) =>
        (item?.quantity || 1) > 1 && item.id === itemId
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ),
    })),

  // Расчет общей суммы
  getTotalPrice: () => {
    const state = get(); // Используем get для доступа к текущему состоянию
    let sum = 0;
    _.forEach(state.basket, (item) => {
      sum += item.price * (item.quantity || 1);
    });
    return sum;
  },
}));

export default basketStore;
