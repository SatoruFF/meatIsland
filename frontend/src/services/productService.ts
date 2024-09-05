// services/postService.ts
import axiosInstance from "./index";

export const getProducts = () => {
  return axiosInstance.get("/products");
};

export const createProduct = (postData: object) => {
  return axiosInstance.post("/products", postData);
};
