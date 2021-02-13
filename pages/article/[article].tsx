import styled from "@emotion/styled";
import { GetStaticPaths, GetStaticProps } from "next";
import { RichText } from "prismic-reactjs";
import { FC } from "react";
import Image from "../../components/Image";
import Layout from "../../components/Layout";
import { Typography } from "../../styled-components";
import { fetchArticle, fetchArticles } from "../../utils/queries";
import dayjs from "dayjs";

interface ArticleProps {
  article: any;
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled(Typography)`
  margin-bottom: 16px;
`;

const Date = styled(Typography)`
  margin-bottom: 47px;
  color: #3f3f3f;
  font-style: italic;
`;

const Text = styled(Typography)`
  margin-top: 80px;
  text-align: justify;
`;

const Article: FC<ArticleProps> = ({ article: a }) => {
  return (
    <Layout title="Article | Le Blog">
      <Container>
        <Title variant="xl">{RichText.render(a.data.title)}</Title>
        <Date variant="xs">
          Publié le {dayjs(a.first_publication_date).format("DD MMMM YYYY")}
        </Date>
        <Image src={a.data.image.url} variant="large" />
        <Text variant="lg">{RichText.render(a.data.content)}</Text>
      </Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const article = await fetchArticle(context.params?.article as any);
  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { results } = await fetchArticles();
  return {
    paths: results.map((c) => ({
      params: {
        article: c.uid,
      },
    })),
    fallback: false,
  };
};

export default Article;
