import styled from "@emotion/styled";
import { primary, white } from "../constants/colors";

const Header = styled.header`
  color: ${white};
  background-color: ${primary};
  width: 100%;
  height: 85px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
`;

export default Header;
