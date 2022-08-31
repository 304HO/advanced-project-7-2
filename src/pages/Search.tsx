import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faX } from "@fortawesome/free-solid-svg-icons";
import Background from "../components/Background";
import Header from "../components/Header";
import SearchHistory from "../components/SearchHistory";
import SearchReview from "../components/SearchReview";
import SearchUser from "../components/SearchUser";
import SearchTap from "../components/SearchTap";

import SimpleBarReact from "simplebar-react";
import "simplebar/src/simplebar.css";

// type HistoryType = {
//   searchHistory: string;
// };

//! Option: Axios Cache Option 사용

function Search() {
  const [searchText, setSearchText] = React.useState<string | null>(null);
  const [searchHistoryList, setSearchHistoryList] = React.useState<Array<string> | null>(null);
  const [searchIdx, setSearchIdx] = React.useState<number>(0);
  const [currentText, setCurrentText] = React.useState<string | null>(null);

  const getSearchHistory = () => {
    const searchHistoryString = localStorage.getItem("searchHistory");
    // console.log(searchHistoryString);
    if (searchHistoryString !== null) {
      const searchHistory = JSON.parse(searchHistoryString);
      setSearchHistoryList(searchHistory);
    }
  };

  const removeSearchHistory = (idx: number) => {
    if (searchHistoryList !== null) {
      if (searchHistoryList.length === 1) {
        localStorage.removeItem("searchHistory");
        setSearchHistoryList(null);
      } else {
        console.log("remove");
        let newHistoryList = [...searchHistoryList];
        newHistoryList.splice(idx, 1);
        console.log("removedHistoryList", newHistoryList);
        localStorage.setItem("searchHistory", JSON.stringify(newHistoryList));
        setSearchHistoryList(newHistoryList);
      }
    }
  };

  const addSearchHistory = (text: string) => {
    const searchHistoryString = localStorage.getItem("searchHistory");
    if (searchHistoryString !== null) {
      const searchHistory = JSON.parse(searchHistoryString);
      console.log("저장 not null ", searchHistory, text);
      localStorage.setItem("searchHistory", JSON.stringify([...searchHistory, text]));
    } else {
      localStorage.setItem("searchHistory", JSON.stringify([text]));
    }
  };

  const updateSearchText = (text: string | null) => {
    if (searchIdx === 0) {
      setSearchText(text);
      setSearchIdx(1);
    } else {
      setSearchText(text);
    }
  };

  const onChangeHandler = (inputValue: string) => {
    // setCurrentText((prev: any) => ({ ...prev, inputValue }));
    setCurrentText(inputValue);
  };

  const onClickHandler = () => {
    if (currentText !== null) {
      updateSearchText(currentText);
      addSearchHistory(currentText);
    }
  };

  React.useEffect(() => {
    getSearchHistory();
  }, [localStorage]);

  React.useEffect(() => {
    // console.log("searchIdx", searchIdx);
  }, [searchIdx]);

  return (
    <>
      <Background>
        <StyledSimpleBarReact forceVisible="y" autoHide={false}>
          <Header useBackSpace={true} />
          {searchText === null ? (
            // TODO: SearchContainer -> Header로 삽입
            //! 뒤로가기 버튼에 setSearchIdx(0); 필요
            <>
              <SearchContainer>
                <InputField onChange={(e) => onChangeHandler(e.target.value)} type="text" name="search" required autoComplete="off" />
                <ButtonWrap onClick={() => onClickHandler()}>
                  <FontAwesomeIcon icon={faSearch} />
                </ButtonWrap>
              </SearchContainer>

              {searchHistoryList === null ? null : (
                <HistoryContainer>
                  {searchHistoryList.map((searchHistory: string, idx: number) => {
                    return (
                      <HistoryWrap key={idx}>
                        <HistoryText onClick={() => updateSearchText(searchHistory)}>{searchHistory}</HistoryText>
                        <RemoveButtonWrap onClick={() => removeSearchHistory(idx)}>
                          <FontAwesomeIcon icon={faX} style={{ width: 8 }} />
                        </RemoveButtonWrap>
                      </HistoryWrap>
                    );
                  })}
                </HistoryContainer>
              )}
              {/* <SearchHistory searchHistoryList={searchHistoryList} removeSearchHistory={removeSearchHistory} /> */}
            </>
          ) : searchIdx === 1 ? (
            <>
              <SearchTap searchIdx={searchIdx} setSearchIdx={setSearchIdx} />
              <SearchReview searchText={searchText} />
            </>
          ) : (
            <>
              <SearchTap searchIdx={searchIdx} setSearchIdx={setSearchIdx} />
              <SearchUser searchText={searchText} />
            </>
          )}
        </StyledSimpleBarReact>
      </Background>
    </>
  );
}

const StyledSimpleBarReact = styled(SimpleBarReact)`
  overflow-x: hidden;
  max-height: 100vh;
`;

const SearchContainer = styled.form`
  box-sizing: border-box;
  position: relative;
  width: 344px;
  height: 39px;
  /* display: flex;
align-items: center; */
`;

const InputField = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background: #ffffff;
  /* grey/line */
  border: 1px solid #e7e2e8;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
`;

const ButtonWrap = styled.div`
  display: flex;
  position: absolute;
  top: 10px;
  right: 15px;
`;

const HistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  gap: 4px;
`;

const HistoryWrap = styled.div`
  display: flex;
  flex-direction: row;
`;

const HistoryText = styled.div``;

const RemoveButtonWrap = styled.div`
  display: flex;
  position: absolute;
  right: 30px;
`;
export default Search;
