import styled from "@emotion/styled";

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
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 3px;
  & * {
    font-size: 20px;
  }
  & span:nth-of-type(2) {
    font-size: 14px;
  }
`;

export default DateBadge;
