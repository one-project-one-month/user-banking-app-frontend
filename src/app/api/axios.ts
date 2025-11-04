import axios, { type AxiosInstance } from "axios";
import Cookies from "js-cookie";
import AppConfig from "../config/appConfig";
import { store } from "../store/store";
import { logout, refreshAccessToken } from "@/features/auth/authSlice";

const BASE_URL = AppConfig.BASE_URL;

const API: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

API.interceptors.request.use(
  (config) => {
    const token = Cookies.get("accessToken");
    if (token) {
      config.headers.Authorization = `JWT ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

API.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshToken = Cookies.get("refreshToken");
      if (!refreshToken) {
        store.dispatch(logout());
        return Promise.reject(error);
      }

      try {
        const res = await axios.post(
          `${BASE_URL}/auth/refresh`,
          { refreshToken },
          { withCredentials: true }
        );

        const newAccessToken = res.data?.data?.accessToken;
        if (newAccessToken) {
          store.dispatch(refreshAccessToken(newAccessToken));

          API.defaults.headers.Authorization = `JWT ${newAccessToken}`;
          originalRequest.headers.Authorization = `JWT ${newAccessToken}`;

          return API(originalRequest);
        } else {
          store.dispatch(logout());
        }
      } catch (err) {
        store.dispatch(logout());
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);

export default API;
