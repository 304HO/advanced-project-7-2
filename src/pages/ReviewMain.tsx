import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Background from "../components/Background";
import Header from "../components/Header";
import ReviewArticle from "../components/ReviewArticle";

function ReviewMain() {
  return (
    <>
      <Background>
        <Header></Header>
        <ReviewArticle></ReviewArticle>
      </Background>
    </>
  );
}

export default ReviewMain;
