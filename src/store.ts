import { configureStore } from "@reduxjs/toolkit";
import categoryTabReducer from "./components/categoryFrame/categoryTabsSlice";
import sidebarReducer, {
  updateArticlesInSidebar,
} from "./components/sidebarSlice";
import categoryFrameReducer, {
  updateArticles,
} from "./components/categoryFrameSlice";
import API from "./api";
import Category from "./components/categoryEnums";

const store = configureStore({
  reducer: {
    categoryTabs: categoryTabReducer,
    categoryFrameArticles: categoryFrameReducer,
    sidebar: sidebarReducer,
  },
});

async function initialSetup() {
  const rawData = await Promise.all(
    Object.values(Category).flatMap(async (categoryName) => {
      if (categoryName === Category.Home) {
        return [];
      }
      const response = await API.getArticles(categoryName);
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

  const state = store.getState();

  store.dispatch(updateArticlesInSidebar(state.categoryFrameArticles.articles));
}

initialSetup();

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
