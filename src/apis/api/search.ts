import axiosApi from "../utils";

const searchApi = {
  searchReview: (keyword: any) => axiosApi.get(`/search/review/?keyword=${keyword}`).then((res) => res),
  searchUser: (nickname: any) => axiosApi.get(`/search/user/?nickname=${nickname}`).then((res) => res)
};

export default searchApi;
