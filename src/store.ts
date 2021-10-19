import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./components/slices/sidebar-slice";
import categoryFrameReducer from "./components/slices/category-frame-slice";
import homepageSliceReducer from "./components/slices/homepage-slice";
import { loadArticlesRawDataPerPageFromAPI } from "./utilities";

const store = configureStore({
  reducer: {
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
