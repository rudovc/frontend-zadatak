import API from "./api";
import Category from "./components/categoryEnums";
import { updateArticles } from "./components/categoryFrameSlice";
import store from "./store";

export async function loadArticlesRawDataPerPageFromAPI(page: number) {
  const rawData = await Promise.all(
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
