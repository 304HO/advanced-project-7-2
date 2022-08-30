import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
// import Header from "../components/Header";
import loading from "../components/Login"
import Login from "../components/Login"
import AppStore from "../assets/images/AppStore.png"
import GooglePlay from "../assets/images/GooglePlay.png"

const Container = styled.div`
background-color:black;

  display:flex;
  width:100vw;
  height:100vh;
  
  `

const TitleWrapper = styled.div`
display:flex;
flex-direction:column;
margin-left: 30px;
justify-content:space-between;
  gap: 50px;
  margin-top:100px;
  `

const SubTitle = styled.div`

font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 32px;
line-height: 39px;
color: #FFFFFF;
margin-left: 10px;
  `

const Desc = styled.div`

font-family: 'Inter';
font-style: italic;
font-weight: 900;
font-size: 48px;
line-height: 58px;
color: #FFFFFF;

  `
const Title = styled.div`
font-family: 'Inter';
font-style: italic;
font-weight: 900;
font-size: 64px;
line-height: 77px;
color: #FF5355;
  `

const Img = styled.div`
display:flex;

margin-left: 20px;
gap: 5px;
`

const LocationWrapper = styled.div`
  margin-bottom:100px;`

const Location = styled.div`
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;

color: #FFFFFF;`


function Main() {

  return (
    <Container>
      <TitleWrapper>
        <div>
          <SubTitle>푸드추천</SubTitle>
          <Desc>믿을 수 있는</Desc>
          <Desc>장보기의 시작</Desc>
          <Title>뉴뉴!</Title>
          <Img>
            <img src={AppStore} />
            <img src={GooglePlay} />
          </Img>
        </div>
        <LocationWrapper>
          <Location>주소: 서울특별시 관악구 낙성대로4가길 5 2층 1호</Location>
          <Location>제휴문의: knewnew.official@gmail.com</Location>
        </LocationWrapper>
      </TitleWrapper >
      <Login />
    </Container>
  );
}

export default Main;
