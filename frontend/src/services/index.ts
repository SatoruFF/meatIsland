import _ from 'lodash'
import axios from "axios";
import { baseURL } from './../constants/api';

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  transformResponse: [function (res) {
    return _.get(res, ["data", "data"], {})
  }],
});

export default axiosInstance;
