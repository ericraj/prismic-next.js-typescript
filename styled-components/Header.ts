import { css } from "@emotion/react";
import styled from "@emotion/styled";

const flex = () => css`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Header = styled.header`
  ${flex};
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
  & > div {
    ${flex};
    justify-content: space-between;
    max-width: 1366px;
    height: 85px;
    padding: 0 30px;
    @media (max-width: 1365px) {
      max-width: 100vw;
    }
  }
`;

export default Header;
