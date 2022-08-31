import React from "react";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { ReviewType } from "../../hooks/useFetchMainReview";
import BookmarkCount from "../Count/BookmarkCount";
import CommentCount from "../Count/CommentCount";
import LikeCount from "../Count/LikeCount";
import ViewCount from "../Count/ViewCount";
import ImageArticle from "../ImageArticle";
import Satisfaction from "./Satisfaction";

type ContentPropsType = {
  review: ReviewType;
  useCounter?: boolean;
  children?: React.ReactElement;
};

function Content({ review, children, useCounter = false }: ContentPropsType) {
  return (
    <>
      <StyledTitle>
        <h1>{review?.author?.nickname}</h1>
        <FontAwesomeIcon icon={faEllipsis} />
      </StyledTitle>
      <Satisfaction satisfaction={review?.satisfaction} />
      <h2>{review?.content}</h2>
      {review?.images && <ImageArticle images={review?.images}></ImageArticle>}
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
