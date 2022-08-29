import axiosApi from "../utils";

const photosApi = {
  getAllPhotos: (params: any) => axiosApi.get(`/photos/?albumId=${params}`).then((res) => res.data)
};

export default photosApi;
