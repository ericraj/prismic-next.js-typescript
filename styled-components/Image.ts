import styled from "@emotion/styled";
import { ImageProps } from "../components/Image";

const Image = styled.img((props: ImageProps) => {
  const isSmall = props.variant === "small";
  const isLarge = props.variant === "large";
  return {
    width: isSmall ? 180 : isLarge ? 603 : 360,
    height: isSmall ? 95 : isLarge ? 318 : 190,
  };
});

export default Image;
