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
import { useNavigate } from "react-router-dom";
import Content from "./Content";

const ReviewArticle = () => {
  const navigate = useNavigate();
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
  const onClickHandler = (id: number) => {
    navigate(`/ReviewDetail/${id}`);
  };

  return (
    <>
      {reviews.map((review, idx) => {
        return (
          <StyledContent
            key={idx}
            onClick={(e) => {
              e.stopPropagation();
              onClickHandler(review.id);
            }}>
            <Content review={review} useCounter={true}>
              {review.parent && (
                <StyledParentContent
                  onClick={(e) => {
                    e.stopPropagation();
                    onClickHandler(review.parent.id);
                  }}>
                  <Content review={review.parent}></Content>
                </StyledParentContent>
              )}
            </Content>
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

export default ReviewArticle;

const StyledContent = styled.div`
  border-radius: 15px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 350px;
  padding: 15px;
  gap: 5px;
  & > span:first-child {
    font-size: 1.3em;
    padding-bottom: 0.5em;
  }
  background: var(--color--primary--white--default);
  box-shadow: -5px -5px 9px rgba(255, 255, 255, 0.45), 5px 5px 9px rgba(94, 104, 121, 0.3);
`;

const StyledParentContent = styled.div`
  border-radius: 15px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 310px;
  padding: 15px;
  gap: 5px;
  & > span:first-child {
    font-size: 1.3em;
    padding-bottom: 0.5em;
  }
  background: var(--color--primary--white--default);
  box-shadow: inset -5px -5px 9px rgba(255, 255, 255, 0.45), inset 5px 5px 9px rgba(94, 104, 121, 0.3);
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
