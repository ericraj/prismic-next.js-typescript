import dayjs from "dayjs";
import "dayjs/locale/fr";
import NextImage from "next/image";
import React, { FC } from "react";
import { DateBadge, Image as StyledImage } from "../styled-components";
import { StyledImageProps } from "../styled-components/Image";

dayjs.locale("fr");

export interface ImageProps extends StyledImageProps {
  src: string;
  alt?: string;
  date?: string;
}

const Image: FC<ImageProps> = ({ variant, src, alt, date }) => {
  return (
    <div style={{ position: "relative" }}>
      <StyledImage variant={variant}>
        <NextImage
          src={src}
          alt={alt}
          width={variant === "small" ? 180 : variant === "large" ? 603 : 360}
          height={variant === "small" ? 95 : variant === "large" ? 318 : 190}
        />
      </StyledImage>
      {date && (
        <DateBadge>
          <span>{dayjs(date).format("DD")}</span>
          <span>{dayjs(date).format("MMM")}</span>
        </DateBadge>
      )}
    </div>
  );
};

export default Image;
