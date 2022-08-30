import React, { useEffect } from "react";
import styled from "styled-components";
import { Button } from "antd";
import { ReactComponent as Icon } from "./../assets/images/checkList.svg";

import { useNavigate } from "react-router-dom";
import { store } from "../app/store";
import { useAppDispatch, useAppSelector } from "../hooks/storeHooks";

const StyledArticle = styled.article`
  position: relative;
  padding: 15em;
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

function Main() {
  const navigate = useNavigate();
  const userState = useAppSelector((state) => state.user);
  useEffect(() => {
    if (userState.accessToken !== null) {
      navigate("/ReviewMain");
    }
  }, []);
  const onClickNavigateHandler = (path: string) => {
    navigate(path);
  };
  return (
    <>
      <StyledArticle>
        <div></div>
      </StyledArticle>
    </>
  );
}

export default Main;
