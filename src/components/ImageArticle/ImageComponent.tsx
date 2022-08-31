import React from "react";
import { faHeart, faCircle, faX, faQuestion, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { ImageType } from "../../hooks/useFetchMainReview";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

type PropsType = {
  image: string;
  images: Array<ImageType>;
};

const ImageComponent = ({ image, images }: PropsType) => {
  const onClickHandler = () => {
    console.log(images);
  };

  return (
    <>
      <StyledArticle>
        <StyledImage src={image} onClick={onClickHandler} />
        <StyledDiv className="IconFaEllipsis">
          <FontAwesomeIcon icon={faEllipsis}></FontAwesomeIcon>
        </StyledDiv>
      </StyledArticle>
    </>
  );
};

export default ImageComponent;

const StyledArticle = styled.div`
  position: relative;
  & > img:hover {
    filter: blur(1px);
  }
`;

const StyledImage = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 15px;
  /* &:hover {
    filter: blur(1px);
  } */
`;

const StyledDiv = styled.div`
  position: absolute;
  top: 40px;
  left: 40px;
  display: none;

  & > img {
    width: 25px;
    height: 25px;
  }

  /* position: relative; */
  /* top: 0; */
  /* left: 0; */
  /* width: 100%; */
  /* background-color: black;
  opacity: 0.2; */
`;
