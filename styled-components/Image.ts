import styled from "@emotion/styled";

export interface StyledImageProps {
  variant?: "small" | "medium" | "large";
}

const Image = styled.div<StyledImageProps>`
  width: ${({ variant }) => (variant === "small" ? 180 : variant === "large" ? 603 : 360)}px;
  height: ${({ variant }) => (variant === "small" ? 95 : variant === "large" ? 318 : 190)}px;

  @media (max-width: 400px) {
    width: 100%;
  }
`;

export default Image;
