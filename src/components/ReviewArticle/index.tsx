import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import reviewApi from "../../apis/api/review";
import { ReviewType } from "../../hooks/useFetchMainReview";
import BookmarkCount from "../Count/BookmarkCount";
import CommentCount from "../Count/CommentCount";
import LikeCount from "../Count/LikeCount";
import ViewCount from "../Count/ViewCount";
import ImageArticle from "../ImageArticle";
import Loading from "../Loading";
import Satisfaction from "./Satisfaction";
import { useInView } from "react-intersection-observer";
import ArrowBottom from "./../../assets/images/double-arrow-bottom-icon.svg";

const ReviewArticle = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [reviews, setReviews] = useState<Array<ReviewType>>([]);
  const { ref, inView } = useInView({
    threshold: 0
  });

  React.useEffect(() => {
    if (inView) {
      getMoreReview();
    }
  }, [inView]);

  const getMoreReview = async () => {
    setIsLoaded(true);
    const { data }: { data: Array<ReviewType> } = await reviewApi.getReview({ limit: 5, offset: reviews.length });
    setReviews((prev: any) => [...prev, ...data]);
    setIsLoaded(false);
  };

  return (
    <>
      {reviews.map((review, idx) => {
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
      <StyledDivHidden ref={ref}></StyledDivHidden>
      {isLoaded && <Loading></Loading>}
      <StyledArrowBottom>
        <img src={ArrowBottom} alt="ArrowBottom"></img>
      </StyledArrowBottom>
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

const StyledDivHidden = styled.div`
  visibility: hidden;
`;

const moveDown = keyframes`
  from{
    transform: translateY(-20px);
  }
  to{
    transform: translateY(0px);
  }
`;

const StyledArrowBottom = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 10px;
  animation: ${moveDown} 1s infinite linear;
`;

export default ReviewArticle;
