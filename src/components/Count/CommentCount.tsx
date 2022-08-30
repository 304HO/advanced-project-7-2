import React from "react";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const CommentCount = ({ count }: { count: number }) => {
  return (
    <StyledSpan>
      <FontAwesomeIcon icon={faComment} />
      <div>{count}</div>
    </StyledSpan>
  );
};
const StyledSpan = styled.span`
  display: flex;
  gap: 5px;
  justify-content: center;
`;
export default CommentCount;
