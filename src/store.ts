import { configureStore } from "@reduxjs/toolkit";
import categoryTabReducer from "./components/category-frame/category-tabs-slice";
import sidebarReducer from "./components/sidebar-slice";
import categoryFrameReducer from "./components/category-frame-slice";
import homepageSliceReducer from "./components/homepage-slice";
import { loadArticlesRawDataPerPageFromAPI } from "./utilities";

const store = configureStore({
  reducer: {
    categoryTabs: categoryTabReducer,
    categoryFrameArticles: categoryFrameReducer,
    sidebar: sidebarReducer,
    homepage: homepageSliceReducer,
  },
});

// Initially load 1 page of articles from the API to fill the store with data
loadArticlesRawDataPerPageFromAPI(1);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
