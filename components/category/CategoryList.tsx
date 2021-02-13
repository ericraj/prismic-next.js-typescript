import styled from "@emotion/styled";
import React, { FC } from "react";
import CategoryItem from "./CategoryItem";

interface CategoryListProps {
  categories: any;
}

const CategoryListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CategoryList: FC<CategoryListProps> = ({ categories }) => {
  return (
    <CategoryListContainer>
      {categories.map((c: any, i: number) => (
        <CategoryItem key={i} category={c} />
      ))}
    </CategoryListContainer>
  );
};

export default CategoryList;
