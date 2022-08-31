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
import Modal from "../components/Modal/Modal";
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
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const modalhandler = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        {review?.images?.map((el: ImageType) => {
          return (
            <SwiperSlide>
              <ImageBox key={el?.id} src={el?.image} alt="ReviewImage" onClick={modalhandler} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          {review?.images?.map((el: ImageType) => {
            return (
              <SwiperSlide>
                <ImageBox key={el?.id} src={el?.image} alt="ReviewImage" onClick={modalhandler} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Modal>
    </>
  );
}

export default SwiperComponent;

const ImageBox = styled.img`
  /* border: 3px solid red; */
  background-color: rgb(245, 244, 251);
  border-radius: 30px;
  margin: 10px;
  padding: 15px;
`;
