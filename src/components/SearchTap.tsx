import React from "react";
import styled from "styled-components";

function SearchTap({ searchIdx }: any) {
  const [currentTab, setCurrentTab] = React.useState<number>(0);

  const selectMenuHandler = (index: number) => {
    setCurrentTab(index);
  };

  return (
    <TapContainer>
      <li key="1" className={currentTab === 1 ? "submenu focused" : "submenu"} onClick={() => selectMenuHandler(1)}>
        리뷰검색
      </li>
      <li key="2" className={currentTab === 2 ? "submenu focused" : "submenu"} onClick={() => selectMenuHandler(2)}>
        회원검색
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

  .submenu {
    width: 100% auto;
    padding: 15px 10px;
    cursor: pointer;
  }
`;

export default SearchTap;
