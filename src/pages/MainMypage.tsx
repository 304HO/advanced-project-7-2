import React, { useEffect } from "react";
import styled from "styled-components";
// import Header from "../components/Header";
import Login from "../components/Login";
import Background from "../components/Background";
import { useAppSelector } from "../hooks/storeHooks";
import { useNavigate } from "react-router-dom";
import Mypage from "../components/Mypage"
import Header from "../components/Header";

function MainMypage() {
  const userState = useAppSelector((state) => state.user);

  return (
    <>
      <Background>
        <Header></Header>
        <StyleDiv>
          <Mypage />
        </StyleDiv>
      </Background>
    </>
  );
}
export default MainMypage;

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
