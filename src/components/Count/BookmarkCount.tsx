import React from "react";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
const BookmarkCount = ({ count }: { count: number }) => {
  return (
    <StyledSpan>
      <FontAwesomeIcon icon={faBookmark} />
      <div>{count}</div>
    </StyledSpan>
  );
};

const StyledSpan = styled.span`
  display: flex;
  gap: 5px;
  justify-content: center;
`;
export default BookmarkCount;
