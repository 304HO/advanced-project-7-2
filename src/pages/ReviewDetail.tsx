import React from "react";
import styled from "styled-components";
import Background from "../components/Background";
import Swiper from "./../components/Swiper";
const ReviewDetail = () => {
  return (
    <Background>
      <StyledDiv>
        <Swiper></Swiper>
      </StyledDiv>
    </Background>
  );
};

const StyledDiv = styled.div`
  width: 200px;
  height: 100px;
`;

export default ReviewDetail;
