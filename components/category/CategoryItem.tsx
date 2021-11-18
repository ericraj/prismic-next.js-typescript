import Link from "next/link";
import { useRouter } from "next/router";
import { RichText } from "prismic-reactjs";
import React, { FC } from "react";
import { CategoryItemContainer } from "../../styled-components";
import CategoryName from "../../styled-components/CategoryName";
import { ArticleList } from "../article";

interface CategoryItemProps {
  category: any;
}

const CategoryItem: FC<CategoryItemProps> = ({ category: c }) => {
  const router = useRouter();
  const isOnHome = router.pathname === "/";

  return (
    <CategoryItemContainer>
      <Link href={`/category/${c.uid}`}>
        <CategoryName isOnHome={isOnHome} variant="xl">
          {RichText.render(c.data.name)}
        </CategoryName>
      </Link>
      <ArticleList articles={c.articles} />
    </CategoryItemContainer>
  );
};

export default CategoryItem;
