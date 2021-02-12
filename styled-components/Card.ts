import styled from "@emotion/styled";
import { CardProps } from "../components/Card";

const Card = styled.div((props: CardProps) => ({
  width: props.width || 720,
  height: props.height || 250,
  boxShadow: "1px 1px 6px 0px rgba(0, 0, 0, .2)",
  borderRadius: 5,
}));

export default Card;
