import axiosInstance from "./index";
import { mapResponse } from "./utils/mapResponse";

export const getCategories = () => {
  return axiosInstance.get("/categories").then((res) => mapResponse(res))
};

export const createProduct = (postData: object) => {
  return axiosInstance.post("/products", postData).then((res) => mapResponse(res))
};
