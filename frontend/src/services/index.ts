import _ from "lodash";
import axios from "axios";
import { baseURL } from "./../constants/api";
import parseJSON from "./utils/parseJson";

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  transformResponse: [
    function (res) {
      if (_.isString(res)) return _.get(parseJSON(res), ["data"], {});
      return _.get(res, ["data"], {});
    },
  ],
});

export default axiosInstance;
