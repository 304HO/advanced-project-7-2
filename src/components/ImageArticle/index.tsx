import React from "react";
import { faHeart, faCircle, faX, faQuestion, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import ImageComponent from "./ImageComponent";
import { ImageType } from "../../hooks/useFetchMainReview";

type PropsType = {
  images: Array<ImageType>;
};

const ImageArticle = ({ images }: PropsType) => {
  return (
    <StyledSpan>
      {images
        .sort((a, b) => a.priority - b.priority)
        .slice(0, 3)
        .map(({ id, image }: ImageType) => (
          <ImageComponent key={id} image={image} images={images}></ImageComponent>
        ))}
    </StyledSpan>
  );
};

const StyledSpan = styled.span`
  position: relative;
  display: flex;
  gap: 5px;
  padding: 5px;
`;

export default ImageArticle;
