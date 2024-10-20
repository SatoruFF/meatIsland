import axiosInstance from "./index";

export const getCategories = () => {
  return axiosInstance.get("/categories");
};

export const getProducts = (query: string | null = "") => {
  return axiosInstance.get(`/products${query || ""}`);
};

export const createProduct = (postData: object) => {
  return axiosInstance.post("/products", postData);
};
