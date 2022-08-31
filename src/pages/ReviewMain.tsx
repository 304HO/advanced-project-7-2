import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import ReviewArticle from "../components/ReviewArticle";

function ReviewMain() {
  const navigate = useNavigate();


  
  return (
    <>
      <Header></Header>
      <ReviewArticle></ReviewArticle>
    </>
  );
}

export default ReviewMain;
