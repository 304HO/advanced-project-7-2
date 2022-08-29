import axiosApi from "../utils";

const authApi = {
  logIn: (payload:any) => axiosApi.post("/auth/login/", payload).then((res) => res),
  logOut: (payload:any) => axiosApi.post("/auth/logout/", payload).then((res) => res),
};

export default authApi;
