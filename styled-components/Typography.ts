import styled from "@emotion/styled";

interface TypographyProps {
  variant?: "xl" | "lg" | "md" | "sm" | "xs";
}

const Typography = styled.p((props: TypographyProps) => {
  const xl = props.variant === "xl";
  const lg = props.variant === "lg";
  const md = props.variant === "md";
  const sm = props.variant === "sm";
  const xs = props.variant === "xs";
  return {
    fontSize: xl ? 24 : lg ? 20 : md ? 16 : sm ? 14 : xs ? 12 : 16,
    fontWeight: xs ? 300 : 500,
    "h1, h2, h3, h4, h5, h6, p": {
      fontSize: xl ? 24 : lg ? 20 : md ? 16 : sm ? 14 : xs ? 12 : 16,
      fontWeight: xs ? 300 : 500,
    },
  };
});

export default Typography;
