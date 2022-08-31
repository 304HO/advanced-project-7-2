import React from "react";
import styled from "styled-components";
import searchApi from "../apis/api/search";

type ResultType = {
  id: number;
  nickname: string;
  profileImage: string;
};

function SearchUser({ searchText }: any) {
  const [searchUserList, setSearchUserList] = React.useState<Array<ResultType> | null>(null);

  React.useEffect(() => {
    const getSearchUserList = async () => {
      try {
        const res: any = await searchApi.searchUser(searchText);
        if (res.result.length !== 0) {
          setSearchUserList(res.result);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getSearchUserList();
  }, [searchText]);

  return (
    <ResultContainer>
      <ResultCount>검색결과 {searchUserList === null ? 0 : searchUserList.length}건</ResultCount>
      {searchUserList !== null &&
        searchUserList.map(({ id, nickname, profileImage }) => {
          return (
            <UserContainer key={id}>
              <UserImg src={profileImage} />
              <UserNickname>{nickname}</UserNickname>
            </UserContainer>
          );
        })}
    </ResultContainer>
  );
}

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const UserContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  padding: 4px 22px;
  gap: 8px;
`;

const ResultCount = styled.div`
  padding: 20px;
`;

const UserImg = styled.img`
  width: 32px;
  border-radius: 50px;
`;

const UserNickname = styled.div``;

export default SearchUser;
