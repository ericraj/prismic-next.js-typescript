import styled from "@emotion/styled";
import Link from "next/link";
import { RichText } from "prismic-reactjs";
import React, { FC } from "react";
import Image from "../../components/Image";
import { Typography } from "../../styled-components";

interface ArticleItemProps {
  article: any;
}

const ArticleItemContainer = styled.div`
  margin-bottom: 90px;
`;

const ArticleTitle = styled(Typography)`
  margin-top: 20px;
  cursor: pointer;
  max-width: 360px;
  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 359px) {
    max-width: 100vw;
  }
`;

const ArticleItem: FC<ArticleItemProps> = ({ article: a }) => {
  const src = a.data.image.url;
  const date = a.first_publication_date;
  const title = a.data.title;
  return (
    <ArticleItemContainer>
      <Image src={src} date={date} />
      <Link href={`/article/${a.uid}`}>
        <ArticleTitle variant="md">{RichText.render(title)}</ArticleTitle>
      </Link>
    </ArticleItemContainer>
  );
};

export default ArticleItem;
