import React, { useEffect } from "react";
import styled from "styled-components";
// import Header from "../components/Header";
import Login from "../components/Login";
import Background from "../components/Background";
import { useAppSelector } from "../hooks/storeHooks";
import { useNavigate } from "react-router-dom";

function Main() {
  const userState = useAppSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (userState.accessToken !== null) {
      navigate("/ReviewMain");
    }
  }, [userState.accessToken]);
  return (
    <>
      <Background>
        <Login />
      </Background>
    </>
  );
}

export default Main;
