import React from "react";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { ReviewType } from "./../../types/review";
import BookmarkCount from "../Count/BookmarkCount";
import CommentCount from "../Count/CommentCount";
import LikeCount from "../Count/LikeCount";
import ViewCount from "../Count/ViewCount";
import ImageArticle from "../ImageArticle";
import Satisfaction from "./Satisfaction";
import SwiperComponent from "../SwiperComponent";

type ContentPropsType = {
  review: ReviewType;
  useCounter?: boolean;
  useSwiper?: boolean;
  children?: React.ReactElement;
};

function Content({ review, children, useCounter = false, useSwiper = false }: ContentPropsType) {
  return (
    <>
      <StyledTitle>
        <h1>{review?.author?.nickname}</h1>
        <FontAwesomeIcon icon={faEllipsis} />
      </StyledTitle>
      <Satisfaction satisfaction={review?.satisfaction} />
      <h2>{review?.content}</h2>
      {useSwiper === false && review?.images && <ImageArticle images={review?.images}></ImageArticle>}
      {useSwiper === true && <SwiperComponent review={review}></SwiperComponent>}
      {children && children}
      {useCounter && (
        <CounterArticle>
          <ViewCount count={review?.viewCount} />
          <CommentCount count={review?.commentCount} />
          <LikeCount count={review?.likeCount} />
          <BookmarkCount count={review?.bookmarkCount} />
        </CounterArticle>
      )}
    </>
  );
}

export default React.memo(Content);

const StyledTitle = styled.span`
  display: flex;
  justify-content: space-between;
`;

const CounterArticle = styled.span`
  display: flex;
  justify-content: space-around;
`;
