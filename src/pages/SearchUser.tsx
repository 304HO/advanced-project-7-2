import React from "react";
import styled from "styled-components";
import searchApi from "../apis/api/search";

type ResultType = {
  id: number;
  nickname: string;
  profileImage: string;
};

type UserType = {
  totalLength: number;
  result: Array<ResultType>;
};

function SearchUser() {
  // TODO : store에서 검색어 내려받기(searchText)
  const searchText = "" as string;
  const [searchUserList, setSearchUserList] = React.useState<Array<UserType> | null>(null);

  React.useEffect(() => {
    const getSearchUserList = async () => {
      try {
        const res: any = await searchApi.searchUser(searchText);
        setSearchUserList(res);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    getSearchUserList();
  }, [searchText]);

  if (searchUserList === null) {
    return <div>검색 결과가 없습니다.</div>;
  }
  return (
    <div>
      {/* <div>검색결과 : {searchUserList.totalLength}</div>
      {searchUserList.result.map((nickname, profileImage) => {
        return (
          <img src={profileImage} alt="err"></img>
          <div>{nickname}</div>
        );
      })} */}
    </div>
  );
}

export default SearchUser;
