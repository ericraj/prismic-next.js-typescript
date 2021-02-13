import styled from "@emotion/styled";
import React, { FC } from "react";
import ArticleItem from "./ArticleItem";

interface ArticleListProps {
  articles: any;
}

const ArticleListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const ArticleList: FC<ArticleListProps> = ({ articles }) => {
  return (
    <ArticleListContainer>
      {articles.results.map((a: any, i: number) => (
        <ArticleItem key={i} article={a} />
      ))}
    </ArticleListContainer>
  );
};

export default ArticleList;
