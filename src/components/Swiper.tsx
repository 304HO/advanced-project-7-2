import React, { useEffect, useState } from "react";
import styled from "styled-components";
import commentsApi from "../apis/api/comments";
import "swiper/swiper.min.css";
import { Swiper, SwiperSlide } from "swiper/swiper-react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "./Loading";

type CommnetType = {
  id: number;
  nickname: string;
  content: string;
  profileImage: string;
};

const data: any = {
  id: 150,
  author: {
    id: 88,
    tags: {
      foodStyle: ["건강추구파"],
      occupation: ["주부"],
      household: ["2인가구"]
    },
    nickname: "test bot4",
    profileImage: null,
    badge: null
  },
  satisfaction: "best",
  parent: null,
  market: "SSG",
  product: {
    id: 12,
    name: "블루베리 콩포트 그릭요거트130g"
  },
  content: "6 번째 요거트 푸드로그",
  images: [
    {
      id: 160,
      image: "https://knewnnew-dev-s3.s3.amazonaws.com/review/2022071807361865e729f118.jpeg",
      priority: 0
    },
    {
      id: 161,
      image: "https://knewnnew-dev-s3.s3.amazonaws.com/review/2022071807361865e729f118.jpeg",
      priority: 1
    }
  ],
  tags: {
    interest: ["다이어터", "오늘한끼", "빵식가", "홈카페", "디저트러버", "신상탐험대", "비건", "애주가", "캠퍼"]
  },
  bookmarkCount: 14,
  childCount: 0,
  commentCount: 0,
  likeCount: 18,
  shareCount: 0,
  created: "2022-08-19T19:27:40.141801+09:00",
  isBookmark: false,
  isLike: false,
  isActive: true,
  isEdit: false
};

type ImageType = {
  id: number;
  image: string;
  priority: number;
};

function ReviewImageComponent() {
  const [reviewData, setReviewData] = useState<any>(null);
  const { id } = useParams();

  useEffect(() => {
    const getReviewData = async () => {
      if (id !== undefined) {
        const res = await commentsApi.getAllComments({ id: parseInt(id) });
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
      {reviewData?.images?.map((el: ImageType) => {
        return <Imagetest key={el?.id} src={el?.image} alt="ReviewImage" />;
      })}
    </>
  );
}

export default ReviewImageComponent;

const Imagetest = styled.img`
  border: 3px solid red;
`;
