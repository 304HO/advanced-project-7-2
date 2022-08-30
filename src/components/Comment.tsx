import React, { useEffect, useState } from "react";
import styled from "styled-components";
import commentsApi from "../apis/api/comments";

type CommnetType = {
  id: number;
  nickname: string;
  content: string;
  profileImage: string;
};

const data: any = [
  {
    id: 279,
    author: {
      id: 44,
      nickname: "원소주마시는 박재범",
      profileImage: "https://knewnnew-dev-s3.s3.amazonaws.com/user/202207202240563a66ed06ba.jpeg"
    },
    content:
      "웹 페이지의 렌더링이 클라이언트 쪽에서 일어나는것이며 서버와 클라이언트 간의 데이터 트래픽이 감소하고 렌더링이 한번만 있기 때문에 페이지 이동이 빠르다는 장점이 있지만 SEO(검색최적화) 사용에는 ssr(서버 사이드 라우팅)방식에 비해 활용도가 낮다는 단점이 있습니다. 그리고 보안관련해서는 쿠키에 사용자 정보를 저장해야 해서 위험 요소가 있습니다.",
    created: "2022-08-30T14:20:35.117410+09:00",
    child: [
      {
        id: 280,
        author: {
          id: 44,
          nickname: "빵돌이빵순이아빠",
          profileImage: "https://knewnnew-dev-s3.s3.amazonaws.com/user/202207202240563a66ed06ba.jpeg"
        },
        content:
          "컴포넌트는 현재의 this.state와 setState를 비교해서 업데이트가 필요한 경우에만 render함수를 호출하는데 state를 직접 수정하게되면 리액트가 Render  함수를 호출하지 않아 상태변경이 일어나도 렌더링이 일어나지 않을수 있기 때문입니다.",
        created: "2022-08-30T14:20:44.271968+09:00",
        child: [],
        likeCount: 0,
        isLike: false,
        isActive: true
      }
    ],
    likeCount: 0,
    isLike: false,
    isActive: true
  },
  {
    id: 280,
    author: {
      id: 44,
      nickname: "빵돌이빵순이아빠",
      profileImage: "https://knewnnew-dev-s3.s3.amazonaws.com/user/202207202240563a66ed06ba.jpeg"
    },
    content:
      "컴포넌트는 현재의 this.state와 setState를 비교해서 업데이트가 필요한 경우에만 render함수를 호출하는데 state를 직접 수정하게되면 리액트가 Render  함수를 호출하지 않아 상태변경이 일어나도 렌더링이 일어나지 않을수 있기 때문입니다.",
    created: "2022-08-30T14:20:44.271968+09:00",
    child: [],
    likeCount: 0,
    isLike: false,
    isActive: true
  }
];

function Comments() {
  const [comments, setComments] = useState<Array<CommnetType>>([]);

  // const getcomments = async () => {
  //   try {
  //     const res = await commentsApi.getAllComments();
  //     // console.log(res);
  //     setComments(data);
  //     console.log(comments);
  //   } catch (err) {
  //     return console.log(err);
  //   }
  // };

  useEffect(() => {
    setComments(data);
    console.log("commentsdata", comments);
  }, [comments]);

  if (comments.length === 0) return null;

  return (
    <>
      <CommnetRootContainer>
        <Text>작성된 댓글 {comments.length}개</Text>
        {comments.map((el: any) => {
          return (
            <>
              <CommentContainer key={el["id"]}>
                <CommnetProfile src={el["author"]["profileImage"]} alt="profileImg" />
                <div>
                  <CommentHeader>
                    <div>{el["author"]["nickname"]}</div>
                    {/* created 년 월 일 (시 분)?  */}
                    <div>{el["created"].slice(0, 10)}</div>
                  </CommentHeader>
                  <div>{el["content"]}</div>
                </div>
              </CommentContainer>
            </>
          );
        })}
      </CommnetRootContainer>
    </>
  );
}

export default Comments;

const Text = styled.div`
  padding: 10px 0;
`;

const CommentHeader = styled.div`
  /* border: 3px solid black; */
  padding: 5px 0;
  display: flex;
  flex-direction: row;
  gap: 30px;
`;

const CommnetProfile = styled.img`
  /* border: 1px solid blue; */
  width: 21px;
  height: 21px;
`;

const CommentContainer = styled.div`
  /* border: 1px solid gold; */
  padding: 5px;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const CommnetRootContainer = styled.div`
  border: 1px solid red;
  width: 420px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  /* gap: 10px; */
`;
