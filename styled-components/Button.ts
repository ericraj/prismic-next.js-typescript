import styled from "@emotion/styled";

export interface ButtonProps {
  color?: string;
  backgroundColor?: string;
  minWidth?: number;
  height?: number;
  fontSize?: number;
}

const Button = styled.button<ButtonProps>`
  color: ${({ theme, color }) => color ?? theme.colors.white};
  background-color: ${({ theme, backgroundColor }) => backgroundColor ?? theme.colors.secondary};
  min-width: ${({ minWidth }) => minWidth ?? 152}px;
  height: ${({ height }) => height ?? 38}px;
  min-height: ${({ height }) => height ?? 38}px;
  font-size: ${({ fontSize }) => fontSize ?? 14}px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:hover {
    opacity: 0.9;
  }
`;

export default Button;
