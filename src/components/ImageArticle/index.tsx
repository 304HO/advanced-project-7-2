import React from "react";
import { faHeart, faCircle, faX, faQuestion, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import ImageComponent from "./ImageComponent";
import { ImageType } from "../ReviewArticle";

type PropsType = {
  images: Array<ImageType>;
};

const ImageArticle = ({ images }: PropsType) => {
  return (
    <StyledSpan>
      {images
        .sort((a, b) => a.priority - b.priority)
        .map(({ id, image }: ImageType) => (
          <ImageComponent key={id} image={image} images={images}></ImageComponent>
        ))}
    </StyledSpan>
  );
};

const StyledSpan = styled.span`
  display: flex;
  gap: 5px;
  padding: 5px;
`;

export default ImageArticle;
