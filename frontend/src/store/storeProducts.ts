import { cleanString } from "./../services/utils/cleanString";
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

interface ProductAttributes {
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
  recommendation: null | boolean;
  image: string | null;
}

interface IProduct {
  id: number;
  attributes: ProductAttributes;
}

interface ProductsState {
  products: IProduct[];
  searchedProducts: IProduct[];
  setProducts: (newProducts: IProduct[]) => void;
  addProducts: (newProducts: IProduct[]) => void;
  removeProduct: (id: number) => void;
  filterProducts: (attribute: keyof ProductAttributes, value: any) => void;
  searchProducts: (value: string) => void;
  clearProducts: () => void;
}

// Хранилище с типами для продуктов
const useProducts = create<ProductsState>((set) => ({
  products: [],
  searchedProducts: [],
  setProducts: (newProducts) =>
    set(() => ({
      products: newProducts,
      searchedProducts: newProducts,
    })),

  addProducts: (newProducts) =>
    set((state) => ({
      products: [...state.products].concat(newProducts),
      searchedProducts: [...state.products].concat(newProducts),
    })),

  removeProduct: (id) =>
    set((state) => ({
      products: state.products.filter((product) => product.id !== id),
      searchedProducts: state.searchedProducts.filter(
        (product) => product.id !== id
      ),
    })),

  filterProducts: (attribute, value) =>
    set((state) => ({
      searchedProducts: state.products.filter(
        (product) => product.attributes[attribute] === value
      ),
    })),

  // Поиск по названию продуктов, не меняя основной массив products
  // На самом деле это логика апишки, но пока тут
  // TODO: move logic to query
  searchProducts: (value: string) =>
    set((state) => ({
      searchedProducts: state.products.filter((product) => {
        if (_.isEmpty(value.trim())) return true;
        return _.includes(
          cleanString(product.attributes["name"]),
          cleanString(value)
        );
      }),
    })),

  clearProducts: () =>
    set(() => ({
      products: [],
      searchedProducts: [],
    })),
}));

export default useProducts;
