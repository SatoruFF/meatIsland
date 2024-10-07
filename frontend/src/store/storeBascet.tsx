import { create } from "zustand";
import _ from "lodash";

interface CategoryAttributes {
  name: string;
  createdAt: string;
  updatedAt: string;
}

interface CategoryData {
  id: number;
  attributes: CategoryAttributes;
}
type Basket = {
  name: string;
  price: number;
  createdAt: string;
  updatedAt: string;
  description: string;
  available: boolean;
  weight: number | null;
  StockQuantity: number | null;
  tradePrice: number | null;
  category: {
    data: CategoryData;
  };
  image: string | null;
  quantity: number;
};

type StoreState = {
  basket: { [key: number]: Basket };
  addToBasket: (itemId: string) => void;
  removeFromCart: (itemId: string) => void;
  increaseQuantity: (itemId: string) => void;
  decreaseQuantity: (itemId: string) => void;
  getTotalPrice: () => number;
};

const basket: { [key: number]: Basket } = {};

const basketStore = create<StoreState>((set, get) => ({
  basket,

  // Добавление товара в корзину
  addToBasket: (newItem) =>
    set((state) => {
      const existingItem = state.basket[newItem.id];
      if (existingItem) {
        return {
          basket: {
            ...state.basket,
            [newItem.id]: {
              ...existingItem,
              quantity: (existingItem.quantity || 0) + 1,
            },
          },
        };
      }
      return {
        basket: {
          ...state.basket,
          [newItem.id]: { ...newItem, quantity: 1 },
        },
      };
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
      sum += item.attributes.price * (item.quantity || 1);
    });
    return sum;
  },
}));

export default basketStore;
