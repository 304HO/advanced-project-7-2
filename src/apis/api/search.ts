import axiosApi from "../utils";

const searchApi = {
  searchReview: (keyword: any) => axiosApi.post(`/search/review/?keyword=${keyword}`).then((res) => res),
  searchUser: (nickname: any) => axiosApi.post(`/search/user/?nickname=${nickname}`).then((res) => res)
};

export default searchApi;
