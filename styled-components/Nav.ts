import styled from "@emotion/styled";

const Nav = styled.nav`
  & > a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
  }

  & > a:hover {
    text-decoration: underline;
  }

  & > a:not(:nth-of-type(1)) {
    margin-left: 15px;
  }
`;

export default Nav;
