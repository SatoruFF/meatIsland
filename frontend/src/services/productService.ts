import axiosInstance from "./index";

export const getCategories = () => {
  return axiosInstance.get("/categories")
};

export const getProducts = () => {
  return axiosInstance.get("/products")
};

export const createProduct = (postData: object) => {
  return axiosInstance.post("/products", postData)
};
