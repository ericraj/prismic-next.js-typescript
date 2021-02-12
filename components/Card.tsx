import React, { FC } from "react";
import { Card as StyledCard } from "../styled-components";

export interface CardProps {
  // children: ReactNode
  width?: string | number;
  height?: string | number;
}

const Card: FC<CardProps> = ({ width, height, children }) => {
  return (
    <StyledCard width={width} height={height}>
      {children}
    </StyledCard>
  );
};

export default Card;
