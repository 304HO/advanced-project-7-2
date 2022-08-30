import React from "react";
import styled from "styled-components";
import searchApi from "../apis/api/search";

type ReviewType = {};

function SearchReview() {
  // TODO : store에서 검색어 내려받기(searchText)
  const searchText = "" as string;

  React.useEffect(() => {
    const [searchReviewList, setSearchReviewList] = React.useState<Array<ReviewType> | null>(null);
    const getSearchReviewList = async () => {
      try {
        const res: any = await searchApi.searchReview(searchText);
        console.log(res);
        setSearchReviewList(res);
      } catch (error) {
        console.log(error);
      }
    };
    getSearchReviewList();
  }, [searchText]);

  return <div></div>;
}

export default SearchReview;
