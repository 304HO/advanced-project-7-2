import React from "react";
import styled from "styled-components";

type HistoryType = {
  searchText: string;
};

//! Axios Cache Option 사용

function SearchMain() {
  const [searchHistoryList, setSearchHistoryList] = React.useState<Array<HistoryType> | null>(null);

  const getSearchHistory = () => {
    const searchHistoryString = localStorage.getItem("searchHistory");
    console.log(searchHistoryString);
    if (searchHistoryString !== null) {
      const searchHistory = JSON.parse(searchHistoryString);
      setSearchHistoryList(searchHistory);
    }
  };

  const removeSearchHistory = (idx: number) => {
    if (searchHistoryList !== null) {
      const newHistoryList = searchHistoryList.splice(idx, 1);
      console.log(newHistoryList);
      // localStorage.setItem("searchHistory", newHistoryList);
      setSearchHistoryList(newHistoryList);
    }
  };

  if (searchHistoryList === null) {
    return <div>검색 결과가 없습니다.</div>;
  }
  return (
    <>
      <div>
        {searchHistoryList.map((searchText: any, idx: number) => {
          // TODO : searchText 클릭시 store로 저장
          return (
            <div>
              <div>{searchText}</div>
              <button onClick={() => removeSearchHistory(idx)}></button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default SearchMain;
