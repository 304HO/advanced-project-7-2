import React from "react";
import styled from "styled-components";
import Background from "../components/Background";
import Swiper from "./../components/Swiper";

import SimpleBarReact from "simplebar-react";
import "simplebar/src/simplebar.css";

const ReviewDetail = () => {
  return (
    <Background>
      <StyledSimpleBarReact forceVisible="y" autoHide={false}>
        <Swiper></Swiper>
      </StyledSimpleBarReact>
    </Background>
  );
};

export default ReviewDetail;

const StyledDiv = styled.div`
  width: 200px;
  height: 100px;
`;

const StyledSimpleBarReact = styled(SimpleBarReact)`
  overflow-x: hidden;
  max-height: 100vh;
`;
