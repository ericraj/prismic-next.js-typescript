import styled from "@emotion/styled";
import { white } from "../constants/colors";

const Nav = styled.nav`
  & > a {
    text-decoration: none;
    color: ${white};
  }

  & > a:hover {
    text-decoration: underline;
  }

  & > a:not(:nth-of-type(1)) {
    margin-left: 15px;
  }
`;

export default Nav;
