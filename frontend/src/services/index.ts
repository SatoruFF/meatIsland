import axios from "axios";
import { baseURL } from './../constants/api';

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
