import API from "./api";
import Category from "./components/category-enums";
import { updateArticles } from "./components/category-frame-slice";
import store from "./store";

export async function loadArticlesRawDataPerPageFromAPI(page: number) {
  const rawData = await Promise.all(
    // TODO: Manage the "general" category without duplicates
    Object.values(Category).flatMap(async (categoryName) => {
      if (categoryName === Category.Home) {
        return [];
      }
      const response = await API.getArticles(categoryName, page);
      if (typeof response !== "undefined") {
        const result = response.map((element) => {
          return {
            category: categoryName,
            article: element,
          };
        });
        return result;
      }
    })
  );
  for (const articleSet of rawData) {
    if (typeof articleSet !== "undefined") {
      store.dispatch(updateArticles(articleSet));
    }
  }
}
