import React, { useEffect, useState } from "react";
import styled from "styled-components";
import commentsApi from "../apis/api/comments";
import { useParams } from "react-router-dom";

function Comments() {
  const [comments, setComments] = useState<any>([]);
  const { id: rid } = useParams();

  useEffect(() => {
    const getCommnets = async () => {
      if (rid !== undefined) {
        const res = await commentsApi.getAllComments({ rid: Number(rid) });
        console.log("comments", res);
        setComments(res);
      }
    };
    getCommnets();
  }, []);

  // if (comments.length === 0) return null;

  return (
    <>
      <CommnetRootContainer>
        <Text>작성된 댓글 {comments.length}개</Text>
        {comments.length !== 0 &&
          comments.map((el: any) => {
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
  padding: 10px 0 10px 5px;
  border-top: 1px solid rgb(233, 231, 236);
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
  /* border: 1px solid red; */
  width: 420px;
  display: flex;
  flex-direction: column;
  /* gap: 10px; */
`;
