import axiosApi from "../utils";

const commentsApi = {
  getAllComments: ({ rid }: { rid: number }) => axiosApi.get(`/comment/review/?rid=${rid}`).then((res) => res.data)
};

export default commentsApi;
