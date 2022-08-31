import React from "react";
import styled, { keyframes } from "styled-components";
import searchApi from "../apis/api/search";
import Content from "./ReviewArticle/Content";
import { ReviewType } from "../hooks/useFetchMainReview";
import { useNavigate } from "react-router-dom";
import ArrowBottom from "./../assets/images/double-arrow-bottom-icon.svg";
import Loading from "./Loading";
import { useInView } from "react-intersection-observer";

function SearchReview({ searchText }: any) {
  const navigate = useNavigate();
  const [searchReviewList, setSearchReviewList] = React.useState<Array<ReviewType> | null>(null);
  const [isLoaded, setIsLoaded] = React.useState<boolean>(false);
  const { ref, inView } = useInView({
    threshold: 0
  });

  React.useEffect(() => {
    const getSearchReviewList = async () => {
      try {
        const res: any = await searchApi.searchReview(searchText);
        if (res.result.length !== 0) {
          setSearchReviewList(res.result);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getSearchReviewList();
  }, [searchText]);

  // const searchReviewList = mock;

  const onClickHandler = (id: number) => {
    navigate(`/ReviewDetailPage/${id}`);
  };

  // if (searchReviewList === null) {
  //   return <div>검색 결과가 없습니다.</div>;
  // }
  return (
    <div>
      <ResultCount>검색결과 {searchReviewList === null ? 0 : searchReviewList.length}건</ResultCount>
      {searchReviewList !== null &&
        searchReviewList.map((review, idx) => {
          return (
            <StyledContent
              key={idx}
              onClick={(e) => {
                e.stopPropagation();
                onClickHandler(review.id);
              }}>
              <Content review={review} useCounter={true}>
                {review.parent && (
                  <StyledParentContent
                    onClick={(e) => {
                      e.stopPropagation();
                      onClickHandler(review.parent.id);
                    }}>
                    <Content review={review.parent}></Content>
                  </StyledParentContent>
                )}
              </Content>
            </StyledContent>
          );
        })}
      <StyledDivHidden ref={ref}></StyledDivHidden>
      {isLoaded && <Loading></Loading>}
      {searchReviewList !== null && (
        <StyledArrowBottom>
          <img src={ArrowBottom} alt="ArrowBottom"></img>
        </StyledArrowBottom>
      )}
    </div>
  );
}

const StyledContent = styled.div`
  border-radius: 15px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 350px;
  padding: 15px;
  gap: 5px;
  & > span:first-child {
    font-size: 1.3em;
    padding-bottom: 0.5em;
  }
  background: var(--color--primary--white--default);
  box-shadow: -5px -5px 9px rgba(255, 255, 255, 0.45), 5px 5px 9px rgba(94, 104, 121, 0.3);
`;

const StyledParentContent = styled.div`
  border-radius: 15px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 310px;
  padding: 15px;
  gap: 5px;
  & > span:first-child {
    font-size: 1.3em;
    padding-bottom: 0.5em;
  }
  background: var(--color--primary--white--default);
  box-shadow: inset -5px -5px 9px rgba(255, 255, 255, 0.45), inset 5px 5px 9px rgba(94, 104, 121, 0.3);
`;

const StyledDivHidden = styled.div`
  visibility: hidden;
`;

const moveDown = keyframes`
  from{
    transform: translateY(-20px);
  }
  to{
    transform: translateY(0px);
  }
`;

const StyledArrowBottom = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 10px;
  animation: ${moveDown} 1s infinite linear;
`;

const ResultCount = styled.div`
  padding: 20px;
`;

export default SearchReview;
