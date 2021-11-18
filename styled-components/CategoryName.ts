import styled from "@emotion/styled";
import { Typography } from ".";

export interface CategoryNameProps {
  isOnHome: boolean;
}

const CategoryName = styled(Typography)<CategoryNameProps>`
  margin-bottom: 40px;
  color: ${({ theme }) => theme.colors.primary};
  cursor: ${({ isOnHome }) => (isOnHome ? `pointer` : `auto`)};
  &:hover {
    text-decoration: ${({ isOnHome }) => (isOnHome ? `underline` : `none`)};
  }

  @media (max-width: 889px) {
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
`;

export default CategoryName;
