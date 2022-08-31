import React, { useEffect, useState } from "react";
import styled from "styled-components";
import commentsApi from "./../../apis/api/comments";
import { useParams } from "react-router-dom";
import Comments from "./Comments";

function CommentsArticle() {
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
  console.log("comments?.child?.length", comments);
  return (
    <>
      <Text>작성된 댓글 {comments.length}개</Text>
      <CommnetRootContainer>
        <Comments comments={comments} deep={0} />
      </CommnetRootContainer>
    </>
  );
}

export default CommentsArticle;

const CommnetRootContainer = styled.div`
  /* border: 1px solid red; */
  width: 420px;
  display: flex;
  flex-direction: column;
  /* gap: 10px; */
`;

const Text = styled.div`
  padding: 10px 0 10px 5px;
  border-top: 1px solid rgb(233, 231, 236);
`;
