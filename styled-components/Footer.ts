import styled from "@emotion/styled";

const Footer = styled.footer`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  height: 85px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export default Footer;
