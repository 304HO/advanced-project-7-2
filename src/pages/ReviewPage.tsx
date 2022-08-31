import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Background from "../components/Background";
import Header from "../components/Header";
import ReviewArticle from "../components/ReviewArticle";

import SimpleBarReact from "simplebar-react";
import "simplebar/src/simplebar.css";

function ReviewPage() {
  const obj = {
    useLogout: true,
    useLogo: true,
    useMypage: true,
    useSearch: true
  };
  return (
    <>
      <Background>
        <StyledSimpleBarReact forceVisible="y" autoHide={false}>
          {/* <span>믿을 수 있는 푸드 추천 </span>
          <span>앱으로보기</span> */}
          <Header {...obj}></Header>
          <ReviewArticle></ReviewArticle>
        </StyledSimpleBarReact>
      </Background>
    </>
  );
}

export default ReviewPage;

const StyledSimpleBarReact = styled(SimpleBarReact)`
  overflow-x: hidden;
  max-height: 100vh;
`;
