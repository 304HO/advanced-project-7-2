import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import reviewApi from "../../apis/api/review";
import { ReviewType } from "../../hooks/useFetchMainReview";
import Loading from "../Loading";
import { useInView } from "react-intersection-observer";
import ArrowBottom from "./../../assets/images/double-arrow-bottom-icon.svg";
import { useNavigate } from "react-router-dom";
import Content from "./Content";
import Review from "./Review";

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
        return <Review key={review.id} review={review}></Review>;
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
