import { configureStore } from "@reduxjs/toolkit";
import categoryTabReducer from "./components/categoryFrame/categoryTabsSlice";
import sidebarReducer from "./components/sidebarSlice";
import categoryFrameReducer from "./components/categoryFrameSlice";
import { loadArticlesRawDataPerPageFromAPI } from "./utilities";

const store = configureStore({
  reducer: {
    categoryTabs: categoryTabReducer,
    categoryFrameArticles: categoryFrameReducer,
    sidebar: sidebarReducer,
  },
});

loadArticlesRawDataPerPageFromAPI(1);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
