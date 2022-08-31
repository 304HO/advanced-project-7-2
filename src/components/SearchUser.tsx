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

const mock = {
  totalLength: 2,
  result: [
    {
      id: 48,
      nickname: "구남규#5386",
      profileImage: "https://knewnnew-dev-s3.s3.amazonaws.com/user/20220721122704dc3b3d1432.png"
    },
    {
      id: 69,
      nickname: "구남규#6179",
      profileImage: "https://knewnnew-dev-s3.s3.amazonaws.com/user/202207280828317c6934a097.jpeg"
    }
  ]
};

function SearchUser(searchText: any) {
  // const [searchUserList, setSearchUserList] = React.useState<Array<UserType> | null>(null);

  // React.useEffect(() => {
  //   const getSearchUserList = async () => {
  //     try {
  //       const res: any = await searchApi.searchUser(searchText);
  //       setSearchUserList(res);
  //       console.log(res);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getSearchUserList();
  // }, [searchText]);

  const searchUserList = mock;

  if (searchUserList === null) {
    return <div>검색 결과가 없습니다.</div>;
  }
  return (
    <div>
      <div>검색결과 : {searchUserList.totalLength}</div>
      {searchUserList.result.map((id, nickname, profileImage) => {
        console.log("searchUserListMap", id, nickname, profileImage);
        return (
          <>
            {/* <img src={profileImage} alt="err"></img>
            <div>{nickname}</div> */}
          </>
        );
      })}
    </div>
  );
}

export default SearchUser;
