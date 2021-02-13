import styled from "@emotion/styled";
import { secondary, white } from "../constants/colors";

export interface ButtonProps {
  color?: string;
  backgroundColor?: string;
  minWidth?: string | number;
  height?: string | number;
  fontSize?: string | number;
}

const Button = styled.button((props: ButtonProps) => ({
  color: props.color || white,
  backgroundColor: props.backgroundColor || secondary,
  minWidth: props.minWidth || 152,
  height: props.height || 38,
  minHeight: props.height || 38,
  fontSize: props.fontSize || 14,
  border: "none",
  borderRadius: 5,
  cursor: "pointer",
  "&:focus": {
    outline: "none",
  },
  "&:hover": {
    opacity: 0.9,
  },
}));

export default Button;
