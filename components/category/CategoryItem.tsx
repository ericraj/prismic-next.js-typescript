import styled from "@emotion/styled";
import Link from "next/link";
import { RichText } from "prismic-reactjs";
import React, { FC } from "react";
import { primary } from "../../constants/colors";
import { Typography } from "../../styled-components";
import { ArticleList } from "../article";

interface CategoryItemProps {
  category: any;
}

const CategoryItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const CategoryName = styled(Typography)`
  margin-bottom: 40px;
  color: ${primary};
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const CategoryItem: FC<CategoryItemProps> = ({ category: c }) => {
  return (
    <CategoryItemContainer>
      <Link href={`/category/${c.uid}`}>
        <CategoryName variant="xl">{RichText.render(c.data.name)}</CategoryName>
      </Link>
      <ArticleList articles={c.articles} />
    </CategoryItemContainer>
  );
};

export default CategoryItem;
