import API from "./api";
import Category from "./category-enums";
import { ArticlesPayload } from "./payload-interfaces";
import { updateArticles } from "./components/category-frame-slice";
import store from "./store";

export async function loadArticlesRawDataPerPageFromAPI(
  page: number
): Promise<void> {
  const rawData = await Promise.all(
    // TODO: Manage the "general" category without duplicates
    Object.values(Category).flatMap(async (categoryName) => {
      if (categoryName === Category.Home) {
        return [] as ArticlesPayload[];
      }
      const response = await API.getArticles(categoryName, page);
      if (typeof response.data !== "undefined") {
        const result: ArticlesPayload[] = response.data.articles.map(
          (element) => {
            return {
              category: categoryName,
              article: element,
            };
          }
        );
        return result;
      }
    })
  );
  rawData.forEach((articleSet) => {
    if (typeof articleSet !== "undefined") {
      store.dispatch(updateArticles(articleSet));
    }
  });
}
