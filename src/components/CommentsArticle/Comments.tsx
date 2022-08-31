import React from "react";
import styled from "styled-components";

type CommentPropsType = {
  comments: Array<any>;
  deep?: number;
  children?: React.ReactElement;
};

function Comments({ comments, children, deep = 0 }: CommentPropsType) {
  console.log("comments??", comments);
  return (
    <>
      {comments.length !== 0 &&
        comments.map((comment: any) => {
          console.log(comment.child);
          return (
            <>
              <CommentContainer deep={deep} key={comment["id"]}>
                <CommnetProfile src={comment["author"]["profileImage"]} alt="profileImg" />
                <div>
                  <CommentHeader>
                    <div>{comment["author"]["nickname"]}</div>
                    {/* created 년 월 일 (시 분)?  */}
                    <div>{comment["created"].slice(0, 10)}</div>
                  </CommentHeader>
                  <div>{comment["content"]}</div>
                </div>
              </CommentContainer>
              {comment?.child && comment?.child?.length > 0 && <Comments comments={comment.child} deep={deep + 1}></Comments>}
            </>
          );
        })}
    </>
  );
}

export default Comments;

const CommnetRootContainer = styled.div`
  /* border: 1px solid red; */
  width: 420px;
  display: flex;
  flex-direction: column;
  /* gap: 10px; */
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

const CommentContainer = styled.div<{ deep: number }>`
  /* border: 1px solid gold; */
  padding: 5px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-left: ${(props) => `${props.deep * 30}px`};
`;
