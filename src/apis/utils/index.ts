import axios, { AxiosRequestConfig } from "axios";
import { selectAccessToken } from "../../features/userSlice";

let store: any;

export const injectStore = (_store: any) => {
  store = _store;
};

const axiosApi = axios.create({
  baseURL: "https://dev.knewnnew.com",
  withCredentials: true
});

axiosApi.interceptors.request.use(
  function (config: any) {
    const accessToken = selectAccessToken(store.getState());
    if (accessToken !== null) config.headers.authorization = `Bearer ${accessToken}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosApi.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    window.location.href = "/404";
    console.log(error);
    return Promise.reject(error);
  }
);

export default axiosApi;
