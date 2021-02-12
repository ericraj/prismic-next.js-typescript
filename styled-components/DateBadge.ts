import styled from "@emotion/styled";
import { primary, white } from "../constants/colors";

const DateBadge = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 43px;
  height: 49px;
  color: ${white};
  background-color: ${primary};
  border-radius: 3px;
  & * {
    font-size: 20px;
  }
  & span:nth-child(2) {
    font-size: 14px;
  }
`;

export default DateBadge;
