import React from "react";
import styled from "styled-components";
import searchApi from "../apis/api/search";

type ResultType = {
  id: number;
  author: any;
};

type ReviewType = {
  totalLength: number;
  result: Array<ResultType>;
};

const mock = {
  totalLength: 1,
  result: [
    {
      id: 153,
      author: {
        id: 85,
        tags: {
          foodStyle: ["건강추구파"],
          occupation: ["직장인"],
          household: ["2인가구"]
        },
        nickname: "test bot1",
        profileImage: null,
        badge: null
      },
      parent: null,
      product: {
        id: 12,
        name: "블루베리 콩포트 그릭요거트130g"
      },
      market: "SSG",
      content: "9 번째 요거트 푸드로그",
      images: [
        {
          id: 166,
          image: "https://knewnnew-dev-s3.s3.amazonaws.com/review/2022071807361865e729f118.jpeg",
          priority: 0
        },
        {
          id: 167,
          image: "https://knewnnew-dev-s3.s3.amazonaws.com/review/2022071807361865e729f118.jpeg",
          priority: 1
        }
      ],
      satisfaction: "bad",
      tags: {
        interest: ["신상탐험대", "비건", "빵식가", "다이어터", "오늘한끼", "홈카페", "캠퍼", "애주가", "디저트러버"]
      },
      bookmarkCount: 6,
      commentCount: 0,
      likeCount: 31,
      viewCount: 4,
      created: "2022-08-19T19:27:40.297236+09:00",
      isActive: true,
      isBookmark: false,
      isEdit: false,
      isLike: false
    }
  ]
};

function SearchReview({ searchText }: any) {
  // const [searchReviewList, setSearchReviewList] = React.useState<Array<ReviewType> | null>(null);
  // React.useEffect(() => {
  //   const getSearchReviewList = async () => {
  //     try {
  //       const res: any = await searchApi.searchReview(searchText);
  //       console.log(res);
  //       setSearchReviewList(res);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getSearchReviewList();
  // }, [searchText]);

  const searchReviewList = mock;

  if (searchReviewList === null) {
    return <div>검색 결과가 없습니다.</div>;
  }
  console.log("searchReviewList", searchReviewList);
  console.log("searchText", searchText);
  return (
    <div>
      <div>검색결과 : {searchReviewList.totalLength}</div>
    </div>
  );
}

export default SearchReview;
