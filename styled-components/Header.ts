import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { primary, white } from "../constants/colors";

const flex = () => css`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Header = styled.header`
  ${flex};
  justify-content: center;
  color: ${white};
  background-color: ${primary};
  & > div {
    ${flex};
    justify-content: space-between;
    max-width: 1366px;
    height: 85px;
    padding: 0 30px;
  }
`;

export default Header;
