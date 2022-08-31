import React, { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../hooks/storeHooks";
import authApi from "../apis/api/auth";
import styled from "styled-components";

function MypageComponent() {
  const { userInfo } = useAppSelector((state) => state.user);

  if (userInfo === null) {
    return <div></div>;
  }

  return (
    <div>
      <Contatiner>
        <Desc>
          <Nick>
            {userInfo.nickname}#{userInfo.id}
          </Nick>
          <TagsWrapper>
            <Tags>{userInfo.tags.foodStyle[0]}</Tags>
            <Tags>{userInfo.tags.household[0]}</Tags>
            <Tags>{userInfo.tags.occupation[0]}</Tags>
          </TagsWrapper>
        </Desc>
        <ImgContainer>
          <Img src={userInfo.profileImage}></Img>
        </ImgContainer>
      </Contatiner>
    </div>
  );
}

export default MypageComponent;

const Contatiner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;
const Desc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
const Nick = styled.div`
  font-size: 24px;
`;
const TagsWrapper = styled.div`
  display: flex;
  gap: 5px;
  justify-content: start;
`;
const ImgContainer = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 70%;
  overflow: hidden;
`;

const Tags = styled.div`
  color: gray;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
