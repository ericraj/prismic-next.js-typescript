import { PrismicClient } from "../prismic-config";
import Prismic from "@prismicio/client";

export const fetchCategoriesWithArticles = async (
  articlesLimit: number | null = null
) => {
  return PrismicClient.query(
    Prismic.Predicates.at("document.type", "category")
  ).then(async (response) => {
    // Order by last publication date from most recent to oldest
    const articlesOrderings = "[document.first_publication_date desc]";
    const results = await Promise.all(
      response.results.map(async (item) => {
        const articles = await PrismicClient.query(
          [
            Prismic.Predicates.at("document.type", "article"),
            Prismic.Predicates.at("my.article.category", item.id),
          ],
          articlesLimit
            ? {
                orderings: articlesOrderings,
                pageSize: articlesLimit,
              }
            : {
                orderings: articlesOrderings,
              }
        );
        return { ...item, articles };
      })
    );
    const data = { ...response, results: results };
    return data;
  });
};
