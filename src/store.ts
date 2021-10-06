import { configureStore } from "@reduxjs/toolkit";
import categoryTabReducer from "./components/categoryFrame/categoryTabsSlice";
import sidebarTabReducer from "./components/sidebar/sidebarTabsSlice";
import sidebarReducer from "./components/sidebarSlice";
import categoryFrameReducer from "./components/categoryFrameSlice";

const store = configureStore({
  reducer: {
    categoryTabs: categoryTabReducer,
    sidebarTabs: sidebarTabReducer,
    categoryFrameArticles: categoryFrameReducer,
    sidebarArticles: sidebarReducer,
    /*favorites: favoritesReducer,*/
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
