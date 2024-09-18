import axiosInstance from "./index";

export const getCategories = () => {
  return axiosInstance.get("/categories")
};

export const createProduct = (postData: object) => {
  return axiosInstance.post("/products", postData)
};
