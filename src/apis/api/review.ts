import axiosApi from "../utils";

type reviewType = {
  limit?: number;
  offset?: number;
};

const reviewApi = {
  getReview: async ({ limit, offset }: reviewType) => {
    return await axiosApi.get("/review/", { params: { limit, offset } });
  }
};

export default reviewApi;
