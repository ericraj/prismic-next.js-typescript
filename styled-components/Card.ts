import styled from "@emotion/styled";

interface CardProps {
  width?: string | number;
  height?: string | number;
}

const Card = styled.div((props: CardProps) => ({
  maxWidth: "100vw",
  width: props.width || 720,
  height: props.height || 250,
  boxShadow: "1px 1px 6px 0px rgba(0, 0, 0, .2)",
  borderRadius: 5,
}));

export default Card;
