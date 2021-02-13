import { PrismicClient } from "../prismic-config";
import Prismic from "@prismicio/client";

// Order by last publication date from most recent to oldest
const articlesOrderings = "[document.first_publication_date desc]";

export const fetchArticle = async (uid: string) => {
  return PrismicClient.getByUID("article", uid, {});
};

export const fetchArticles = async () => {
  return PrismicClient.query(Prismic.Predicates.at("document.type", "article"));
};

const fetchArticlesByCategory = (categoryId: string, limit: number | null) => {
  return PrismicClient.query(
    [
      Prismic.Predicates.at("document.type", "article"),
      Prismic.Predicates.at("my.article.category", categoryId),
    ],
    limit
      ? {
          orderings: articlesOrderings,
          pageSize: limit,
        }
      : {
          orderings: articlesOrderings,
        }
  );
};

export const fetchCategories = async () => {
  return PrismicClient.query(
    Prismic.Predicates.at("document.type", "category")
  );
};

export const fetchCategoriesWithArticles = async (
  articlesLimit: number | null = null
) => {
  return PrismicClient.query(
    Prismic.Predicates.at("document.type", "category")
  ).then(async (response) => {
    const results = await Promise.all(
      response.results.map(async (item) => {
        const articles = await fetchArticlesByCategory(item.id, articlesLimit);
        return { ...item, articles };
      })
    );
    const data = { ...response, results: results };
    return data;
  });
};

export const fetchCategoryWithArticles = async (
  categoryUid: string,
  articlesLimit: number | null = null
) => {
  return PrismicClient.getByUID("category", categoryUid, {}).then(
    async (response) => {
      const articles = await fetchArticlesByCategory(
        response.id,
        articlesLimit
      );

      const data = { ...response, articles };
      return data;
    }
  );
};
