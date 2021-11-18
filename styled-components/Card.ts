import styled from "@emotion/styled";

interface CardProps {
  width?: string | number;
  height?: string | number;
}

const Card = styled.div<CardProps>`
  max-width: 100vw;
  width: ${({ width }) => width ?? 720}px;
  height: ${({ height }) => height ?? 250}px;
  box-shadow: 1px 1px 6px 0px rgba(0, 0, 0, 0.2);
  border-radius: 5px;

  @media (max-width: 720px) {
    width: calc(100vw - 40px);
    height: auto;
  }
`;

export default Card;
