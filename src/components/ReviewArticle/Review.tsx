import React from "react";
import styled, { keyframes } from "styled-components";
import { ReviewType } from "../../hooks/useFetchMainReview";
import { useNavigate } from "react-router-dom";
import Content from "./Content";

type ReviewPropsType = {
  review: ReviewType;
  children?: React.ReactElement;
  useSwiper?: boolean;
};

const Review = ({ review, useSwiper = false }: ReviewPropsType) => {
  const navigate = useNavigate();

  const onClickHandler = (id: number) => {
    navigate(`/ReviewDetail/${id}`);
  };

  return (
    <>
      <StyledContent
        onClick={(e) => {
          e.stopPropagation();
          onClickHandler(review.id);
        }}>
        <Content review={review} useCounter={true} useSwiper={useSwiper}>
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
    </>
  );
};

export default Review;

const StyledContent = styled.div`
  border-radius: 15px;
  margin: 30px 20px 30px 20px;
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
