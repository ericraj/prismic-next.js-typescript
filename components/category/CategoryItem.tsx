import styled from "@emotion/styled";
import Link from "next/link";
import { RichText } from "prismic-reactjs";
import React, { FC } from "react";
import { primary } from "../../constants/colors";
import { Typography } from "../../styled-components";
import { ArticleList } from "../article";
import { useRouter } from "next/router";

interface CategoryItemProps {
  category: any;
}

const CategoryItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const CategoryItem: FC<CategoryItemProps> = ({ category: c }) => {
  const router = useRouter();
  const isOnHome = router.pathname === "/";

  const CategoryName = styled(Typography)({
    marginBottom: 40,
    color: primary,
    cursor: isOnHome ? "pointer" : "auto",
    "&:hover": {
      textDecoration: isOnHome ? "underline" : "none",
    },
  });

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
