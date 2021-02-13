import styled from "@emotion/styled";
import { primary } from "../constants/colors";

interface InputProps {
  width?: number | string;
  height?: number | string;
  padding?: number | string;
  borderColor?: string;
}

const Input = styled.input((props: InputProps) => ({
  width: props.width || 305,
  height: props.height || 45,
  minHeight: props.height || 45,
  padding: props.padding || "0px 10px",
  border: `1px solid${props.borderColor || primary}`,
  borderRadius: 5,
  "&:focus": {
    outlineColor: props.borderColor || primary,
  },
}));

export default Input;
