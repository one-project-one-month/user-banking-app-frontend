import axios, { type AxiosInstance } from "axios";
import AppConfig from "../config/appConfig";

const API: AxiosInstance = axios.create({
  baseURL: AppConfig.BASE_URL,
  withCredentials: true,
  timeout: 10000,
});

export default API;
