import axios from "axios";

let store:any;

export const injectStore = (_store:any) => {
  store = _store
}

const axiosApi = axios.create({
  baseURL: "https://dev.knewnnew.com",
  withCredentials: true
});

axiosApi.interceptors.request.use(
  function (config:any) {
    const result = store.getAuthToken();
    console.log("interceptors",result)
    config.headers.authorization = result;
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

axiosApi.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    window.location.href = "/404";
    return Promise.reject(error);
  }
);

export default axiosApi;
