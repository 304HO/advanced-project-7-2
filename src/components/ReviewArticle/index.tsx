import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import reviewApi from "../../apis/api/review";
import BookmarkCount from "../Count/BookmarkCount";
import CommentCount from "../Count/CommentCount";
import LikeCount from "../Count/LikeCount";
import ViewCount from "../Count/ViewCount";
import ImageArticle from "../ImageArticle";
import Loading from "../Loading";
import Satisfaction from "./Satisfaction";

export type ImageType = { id: number; image: string; priority: number };

type ReviewType = {
  id: number;
  author: {
    id: number;
    tags: {
      occupation: Array<string>;
      household: Array<string>;
      foodStyle: Array<string>;
    };
    nickname: string;
    profileImage: null | any;
    badge: null | any;
  };
  parent: null | any;
  product: {
    id: number;
    name: string;
  };
  market: string;
  content: string;
  images: Array<ImageType>;
  satisfaction: "best" | "good" | "bad" | "question";
  tags: {
    [key: string]: Array<string>;
  };
  bookmarkCount: number;
  commentCount: number;
  likeCount: number;
  viewCount: number;
  created: string;
  isActive: boolean;
  isBookmark: boolean;
  isEdit: boolean;
  isLike: boolean;
};

const ReviewArticle = () => {
  const [reviewData, setReviewData] = useState<Array<ReviewType> | null>(null);
  const [offset, setOffset] = useState<number>(0);
  React.useEffect(() => {
    const getReview = async () => {
      const { data }: { data: Array<ReviewType> } = await reviewApi.getReview({ limit: 5, offset });
      console.log(data);
      setReviewData(data);
    };
    getReview();
  }, []);

  useEffect(() => {
    if (reviewData !== null) {
      setOffset(reviewData.length);
    }
  }, [reviewData]);

  const onClickHandler = async () => {
    const { data }: { data: Array<ReviewType> } = await reviewApi.getReview({ limit: 5, offset });
    console.log(data);
    setReviewData((prev: any) => [...prev, ...data]);
  };

  if (reviewData === null) {
    return (
      <>
        <Loading></Loading>
      </>
    );
  }
  return (
    <>
      {reviewData.map((review, idx) => {
        return (
          <StyledContent key={idx}>
            <StyledTitle>
              <h1>{review?.author?.nickname}</h1>
              <FontAwesomeIcon icon={faEllipsis} />
            </StyledTitle>
            <Satisfaction satisfaction={review?.satisfaction} />
            <h2>{review?.content}</h2>
            {review?.images && <ImageArticle images={review?.images}></ImageArticle>}
            <CounterArticle>
              <ViewCount count={review?.viewCount} />
              <CommentCount count={review?.commentCount} />
              <LikeCount count={review?.likeCount} />
              <BookmarkCount count={review?.bookmarkCount} />
            </CounterArticle>
          </StyledContent>
        );
      })}
      <button onClick={onClickHandler}>더보기</button>
    </>
  );
};

const StyledContent = styled.div`
  border-radius: 15px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 380px;
  padding: 15px;
  gap: 5px;
  & > span:first-child {
    font-size: 1.3em;
    padding-bottom: 0.5em;
  }
  background: var(--color--primary--white--default);
`;

const StyledTitle = styled.span`
  display: flex;
  justify-content: space-between;
`;

const CounterArticle = styled.span`
  display: flex;
  justify-content: space-around;
`;

export default ReviewArticle;
