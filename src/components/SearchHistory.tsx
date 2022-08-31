import React from "react";
import styled from "styled-components";

function SearchHistory({ searchHistoryList }: any, removeSearchHistory: any) {
  if (searchHistoryList === null) {
    return null;
  }
  return (
    <>
      {searchHistoryList.map((searchHistory: string, idx: number) => {
        return (
          <div key={idx} onClick={() => removeSearchHistory(idx)}>
            {searchHistory}
          </div>
        );
      })}
    </>
  );
}

export default SearchHistory;
