import React, { useEffect } from "react";
import styled from "styled-components";
// import Header from "../components/Header";
import Login from "../components/Login";
import Background from "../components/Background";
import { useAppSelector } from "../hooks/storeHooks";
import { useNavigate } from "react-router-dom";
import MypageComponent from "../components/MypageComponent";
import Header from "../components/Header";
import SimpleBarReact from "simplebar-react";

function Mypage() {
  return (
    <>
      <Background>
        <Header useBackSpace={true} useMypage={true}>
          MyPage
        </Header>
        <StyledSimpleBarReact forceVisible="y" autoHide={false}>
          <StyleDiv>
            <MypageComponent />
          </StyleDiv>
        </StyledSimpleBarReact>
      </Background>
    </>
  );
}
export default Mypage;

const StyledSimpleBarReact = styled(SimpleBarReact)`
  overflow-x: hidden;
  max-height: 100vh;
`;

const StyleDiv = styled.div`
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: inherit;
  gap: 20px;
  max-height: 100vh;
`;
