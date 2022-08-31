import React from "react";
import styled from "styled-components";
import Background from "../components/Background";
import Header from "../components/Header";
import SearchHistory from "../components/SearchHistory";
import SearchReview from "../components/SearchReview";
import SearchUser from "../components/SearchUser";

type HistoryType = {
  searchHistory: string;
};

//! Option: Axios Cache Option 사용

function Search() {
  const [searchText, setSearchText] = React.useState<string | null>(null);
  const [searchHistoryList, setSearchHistoryList] = React.useState<Array<HistoryType> | null>(null);
  const [searchIdx, setSearchIdx] = React.useState(0);
  const [currentText, setCurrentText] = React.useState<string | null>(null);

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
    updateSearchText(currentText);
  };

  React.useEffect(() => {
    getSearchHistory();
  }, [localStorage]);

  React.useEffect(() => {
    console.log(searchIdx);
  }, [searchIdx]);

  return (
    <>
      <Background>
        <Header />
        {searchText === null ? (
          // TODO: form -> Header로 삽입
          <>
            <SearchHistory />
            <form>
              <input onChange={(e) => onChangeHandler(e.target.value)} type="text" name="search" placeholder="search" required />
              <button onClick={() => onClickHandler()} />
            </form>
          </>
        ) : searchIdx === 1 ? (
          <>
            <SearchReview searchText={searchText} />
          </>
        ) : (
          <>
            <SearchUser searchText={searchText} />
          </>
        )}
      </Background>
    </>
  );

  // switch (searchIdx) {
  //   case 1:
  //     return (
  //       <>
  //         <Header />
  //         {/* <SearchReview /> */}
  //       </>
  //     );
  //   case 2:
  //     return (
  //       <>
  //         <Header />
  //         {/* <SearchUser/> */}
  //       </>
  //     );
  //   default:
  //     return (
  //       <>
  //         <Header />
  //         <SearchHistory />
  //       </>
  //     );
  // }
}

export default Search;
