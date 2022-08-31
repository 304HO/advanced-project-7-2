import React from "react";
import styled from "styled-components";
import Background from "../components/Background";
import Swiper from "../components/SwiperComponent";
import SimpleBarReact from "simplebar-react";
import "simplebar/src/simplebar.css";
import Content from "../components/ReviewArticle/Content";
import { ReviewType } from "../hooks/useFetchMainReview";
import { useParams } from "react-router-dom";
import reviewApi from "../apis/api/review";
import Header from "../components/Header";
import Review from "../components/ReviewArticle/Review";
import CommentsArticle from "../components/CommentsArticle";

const ReviewDetail = () => {
  const [review, setReview] = React.useState<ReviewType | null>(null);
  const { id } = useParams();
  console.log(id);

  React.useEffect(() => {
    const getReview = async () => {
      if (id !== undefined) {
        const res = await reviewApi.getReviewDetail({ id: parseInt(id) });
        console.log("review", res);
        setReview(res);
      }
    };
    getReview();
  }, []);

  return (
    <Background>
      <StyledSimpleBarReact forceVisible="y" autoHide={false}>
        <Header useBackSpace={true}></Header>
        {review !== null && <Review useSwiper={true} review={review}></Review>}
        <CommentsArticle></CommentsArticle>
      </StyledSimpleBarReact>
    </Background>
  );
};

export default ReviewDetail;

const StyledSimpleBarReact = styled(SimpleBarReact)`
  overflow-x: hidden;
  max-height: 100vh;
`;
