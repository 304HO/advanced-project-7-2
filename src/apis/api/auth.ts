import axiosApi from "../utils";

type LoginType = {
  providerType: string;
  email: string;
  password: string;
};

const authApi = {
  login: async (payload: LoginType) => await axiosApi.post("/auth/login/", payload),
  getProfile: async () => await axiosApi.get("/user/")
};

export default authApi;
