import _ from "lodash";
import axios from "axios";
import { baseURL } from "./../constants/api";
import parseJSON from "./utils/parseJson";

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  params: {
    populate: "*",
  },
  transformResponse: [
    function (res) {
      if (_.isString(res)) return _.get(parseJSON(res), ["data"], {});
      return _.get(res, ["data"], {});
    },
  ],
});

axiosInstance.interceptors.request.use((config) => {
  config.params = {
    ...config.params,
    populate: "*",
  };
  return config;
});

export default axiosInstance;
