import _ from "lodash";
import axios from "axios";
import { _baseURL } from "./../constants/api";
import parseJSON from "./utils/parseJson";

const axiosInstance = axios.create({
  baseURL: _baseURL,
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
    // populate: "*", // need for fetch all relations in strapi
  };
  return config;
});

export default axiosInstance;
