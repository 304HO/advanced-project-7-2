import axiosApi from "../utils";

const commentsApi = {
  getAllComments: ({ id }: { id: number }) => axiosApi.get(`/comment/review/${id}`).then((res) => res.data)
};

export default commentsApi;
