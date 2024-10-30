import { ISale } from "../Types/Sale";
import axiosInstance from "./index";

export const createSail = (data: ISale) => {
  return axiosInstance.post("/sales", data);
};
