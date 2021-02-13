import { GetStaticPaths, GetStaticProps } from "next";
import React, { FC } from "react";
import { CategoryItem } from "../../components/category";
import Layout from "../../components/Layout";
import {
  fetchCategories,
  fetchCategoryWithArticles,
} from "../../utils/queries";

interface CategoryProps {
  category: any;
}

const Category: FC<CategoryProps> = ({ category: c }) => {
  return (
    <Layout title="Catégorie | Le Blog">
      <CategoryItem category={c} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const category = await fetchCategoryWithArticles(
    context.params?.category as any
  );
  return {
    props: {
      category,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { results } = await fetchCategories();
  return {
    paths: results.map((c) => ({
      params: {
        category: c.uid,
      },
    })),
    fallback: false,
  };
};

export default Category;
