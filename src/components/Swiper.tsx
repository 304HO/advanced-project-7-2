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
import Modal from "../components/Modal/Modal"

type ImageType = {
  id: number;
  image: string;
  priority: number;
};

function ReviewImageComponent() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const modalhandler = () => {
    setIsOpen((prev) => !prev);
  };

  const [reviewData, setReviewData] = useState<any>(null);
  const { id } = useParams();

  useEffect(() => {
    const getReviewData = async () => {
      if (id !== undefined) {
        const res = await reviewApi.getReviewDetail({ id: parseInt(id) });
        // console.log("reviewdata", res);
        setReviewData(res);
      }
    };
    getReviewData();
  }, []);

  if (reviewData === null) {
    return <Loading></Loading>;
  }

  // const getcomments = async () => {
  //   try {
  //     const res = await commentsApi.getAllComments();
  //     // console.log(res);
  //     setComments(data);
  //     console.log(comments);
  //   } catch (err) {
  //     return console.log(err);
  //   }
  // };

  // useEffect(() => {
  //   setReviewImgae(data);
  //   // console.log("ReviewImage", reviewImage);
  // }, [reviewImage]);

  //   if (reviewImgae.length === 0) return null;

  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        {reviewData?.images?.map((el: ImageType) => {
          return (
            <SwiperSlide>
              <ImageBox key={el?.id} src={el?.image} alt="ReviewImage" onClick={modalhandler} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          {reviewData?.images?.map((el: ImageType) => {
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

export default ReviewImageComponent;

const ImageBox = styled.img`
  /* border: 3px solid red; */
  background-color: rgb(245, 244, 251);
  border-radius: 30px;
  margin: 10px 50px;
`;

