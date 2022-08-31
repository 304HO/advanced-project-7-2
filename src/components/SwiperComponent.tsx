import React, { useEffect, useState } from "react";
import styled from "styled-components";
import commentsApi from "../apis/api/comments";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "./Loading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import reviewApi from "../apis/api/review";
import { ReviewType } from "../hooks/useFetchMainReview";

type ImageType = {
  id: number;
  image: string;
  priority: number;
};

type ReviewImageComponent = {
  review: ReviewType;
};

function SwiperComponent({ review }: ReviewImageComponent) {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        {review?.images?.map((el: ImageType) => {
          return (
            <SwiperSlide>
              <ImageBox key={el?.id} src={el?.image} alt="ReviewImage" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

export default SwiperComponent;

const ImageBox = styled.img`
  /* border: 3px solid red; */
  background-color: rgb(245, 244, 251);
  border-radius: 30px;
  margin: 10px 50px;
`;
