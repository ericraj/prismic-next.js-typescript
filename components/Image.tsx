import dayjs from "dayjs";
import "dayjs/locale/fr";
import React, { FC } from "react";
import { DateBadge, Image as StyledImage } from "../styled-components";

dayjs.locale("fr");

export interface ImageProps {
  variant?: "small" | "medium" | "large";
  src: string;
  alt?: string;
  date?: string;
}

const Image: FC<ImageProps> = ({ variant, src, alt, date }) => {
  return (
    <div style={{ position: "relative" }}>
      <StyledImage variant={variant} src={src} alt={alt} />
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
