import React from "react";
import styled from "styled-components";
import AppStore from "../assets/images/AppStore.png";
import GooglePlay from "../assets/images/GooglePlay.png";

type BackgroundType = {
  children?: React.ReactNode;
};

function Background({ children }: BackgroundType) {
  return (
    <>
      <Container>
        <TitleWrapper>
          <TilteContainer>
            <SubTitle>푸드추천</SubTitle>
            <Desc>믿을 수 있는</Desc>
            <Desc>장보기의 시작</Desc>
            <Title>뉴뉴!</Title>
            <Img>
              <a
                href={
                  "https://apps.apple.com/us/app/%EB%89%B4%EB%89%B4-%EC%9E%A5%EB%B3%B4%EA%B8%B0-%EC%A0%84-%ED%95%84%EC%88%98-%EC%95%B1/id1626766280"
                }>
                <img src={AppStore} alt={"뉴뉴 앱스토어"} />
              </a>
              <a href={"https://play.google.com/store/apps/details?id=com.mealing.knewnnew&hl=en_NZ&gl=US"}>
                <img src={GooglePlay} alt={"뉴뉴 구글 스토어"} />
              </a>
            </Img>
          </TilteContainer>
          <LocationWrapper>
            <Location>주소: 서울특별시 관악구 낙성대로4가길 5 2층 1호</Location>
            <Location>제휴문의: knewnew.official@gmail.com</Location>
          </LocationWrapper>
        </TitleWrapper>
        <ContentContainer>
          <ContentSection>{children}</ContentSection>
        </ContentContainer>
      </Container>
    </>
  );
}

export default Background;

const Container = styled.div`
  background-color: black;

  display: flex;
  width: 100vw;
  height: 100vh;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 50px;
  margin-top: 150px;
  margin-left: 100px;
`;

const TilteContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const SubTitle = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 39px;
  color: #ffffff;
  margin-left: 10px;
`;

const Desc = styled.div`
  font-family: "Inter";
  font-style: italic;
  font-weight: 900;
  font-size: 48px;
  line-height: 58px;
  color: #ffffff;
`;
const Title = styled.div`
  font-family: "Inter";
  font-style: italic;
  font-weight: 900;
  font-size: 64px;
  line-height: 77px;
  color: #ff5355;
`;

const Img = styled.div`
  display: flex;
  margin-left: 20px;
  gap: 5px;
`;

const LocationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 150px;
  gap: 10px;
`;

const Location = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
`;

const ContentContainer = styled.div`
  width: 420px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 50px;
  background-color: rgb(246, 246, 252);

  justify-content: center;
  align-items: center;
  margin-left: 500px;

  // 추가
  position: relative;

  /* overflow: hidden scroll; */
`;

const ContentSection = styled.div`
  bottom: 0;
  left: 0;
  margin: 0;
  padding: 0;
  position: absolute;
  right: 0;
  top: 0;
  height: 100vh;
  /* overflow: hidden scroll; */
`;
