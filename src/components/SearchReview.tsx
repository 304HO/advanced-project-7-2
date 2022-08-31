import React from "react";
import styled from "styled-components";
import searchApi from "../apis/api/search";

type ResultType = {
  id: number;
  author: any;
};

type ReviewType = {
  id: number;
  totalLength: number;
  result: Array<ResultType>;
  content: string;
};

function SearchReview({ searchText }: any) {
  const [searchReviewList, setSearchReviewList] = React.useState<Array<ReviewType> | null>(null);
  React.useEffect(() => {
    const getSearchReviewList = async () => {
      try {
        const data: any = await searchApi.searchReview(searchText);
        if (data?.result !== undefined) {
          setSearchReviewList(data.result);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getSearchReviewList();
  }, [searchText]);

  // const searchReviewList = mock;

  if (searchReviewList === null) {
    return <div>검색 결과가 없습니다.</div>;
  }
  // console.log("searchReviewList", searchReviewList);
  return (
    <div>
      {searchReviewList.map((searchReview) => {
        return <div key={searchReview.id}>검색결과 : {searchReview.content}</div>;
      })}
    </div>
  );
}

export default SearchReview;
