import styled from "@emotion/styled";
import { GetStaticProps } from "next";
import React, { FC } from "react";
import CardForm from "../components/CardForm";
import { CategoryList } from "../components/category";
import Layout from "../components/Layout";
import { Typography } from "../styled-components";
import { fetchCategoriesWithArticles } from "../utils/queries";

interface IndexProps {
  categories: any;
}

const Title = styled(Typography)`
  font-family: "Montserrat Alternates", sans-serif;
  font-size: 55px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 45px;
`;

const Index: FC<IndexProps> = ({ categories }) => {
  return (
    <Layout title="Home | Le Blog">
      <Title>
        Ceci est un blog simple réalisé avec Prismic, Next.js et TypeScript
      </Title>
      <CategoryList categories={categories.results} />
      <CardForm />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const categories = await fetchCategoriesWithArticles(3);
  return {
    props: {
      categories: categories,
    },
  };
};

export default Index;
