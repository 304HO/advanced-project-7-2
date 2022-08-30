import React from "react";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
const ViewCount = ({ count }: { count: number }) => {
  return (
    <StyledSpan>
      <FontAwesomeIcon icon={faEye} />
      <div>{count}</div>
    </StyledSpan>
  );
};
const StyledSpan = styled.span`
  display: flex;
  gap: 5px;
  justify-content: center;
`;
export default ViewCount;
