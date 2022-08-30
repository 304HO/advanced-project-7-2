import React from "react";
import { faHeart, faCircle, faX, faQuestion, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { ImageType } from "../ReviewArticle";

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
      <StyledImage src={image} onClick={onClickHandler} />
    </>
  );
};

const StyledImage = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 15px;
`;

export default ImageComponent;
