import axiosInstance from "./index";

export const getUser = (userId: string) => {
  return axiosInstance.get(`/users/${userId}`);
};

export const createUser = (userData: object) => {
  return axiosInstance.post("/users", userData);
};
