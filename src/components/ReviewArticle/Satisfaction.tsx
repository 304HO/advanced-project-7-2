import React from "react";
import { faHeart, faCircle, faX, faQuestion, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

type propsType = {
  satisfaction: "best" | "good" | "bad" | "question";
};

type IconPartialType = {
  [x in propsType["satisfaction"]]: IconDefinition;
};
type CommentPartialType = {
  [x in propsType["satisfaction"]]: string;
};

const Satisfaction = ({ satisfaction }: propsType) => {
  const iconObj: IconPartialType = { best: faHeart, good: faCircle, bad: faX, question: faQuestion };
  const commentObj: CommentPartialType = { best: "최고예요", good: "괜찮아요", bad: "별로예요", question: "궁금해요" };
  return (
    <StyledSpan>
      <FontAwesomeIcon icon={iconObj[satisfaction]} />
      <div>{commentObj[satisfaction]}</div>
    </StyledSpan>
  );
};

const StyledSpan = styled.span`
  display: flex;
  gap: 5px;
  padding: 5px;
`;

export default Satisfaction;
