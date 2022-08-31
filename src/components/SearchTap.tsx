import React from "react";
import styled from "styled-components";

function SearchTap({ searchIdx, setSearchIdx }: any) {
  return (
    <TapContainer>
      <li key="reviewTap" className={searchIdx === 1 ? "submenu focused" : "submenu"} onClick={() => setSearchIdx(1)}>
        메뉴
      </li>
      <li key="userTap" className={searchIdx === 2 ? "submenu focused" : "submenu"} onClick={() => setSearchIdx(2)}>
        회원
      </li>
    </TapContainer>
  );
}

const TapContainer = styled.ul`
  background-color: #ffffff;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  list-style: none;
  margin-bottom: 10px;

  .submenu {
    width: 50%;
    padding: 15px 10px;
    cursor: pointer;
    text-align: center;
  }

  .focused {
    border-bottom: 2px solid black;
  }
`;

export default SearchTap;
