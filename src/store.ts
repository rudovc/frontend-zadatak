import { configureStore } from "@reduxjs/toolkit";
import categoryTabReducer from "./components/categoryFrame/categoryTabsSlice";
import sidebarTabReducer from "./components/sidebar/sidebarTabsSlice";
import categoryFrameArticlesSliceReducer from "./components/categoryFrameArticlesSlice";
// ...

const store = configureStore({
  reducer: {
    categoryTabs: categoryTabReducer,
    sidebarTabs: sidebarTabReducer,
    categoryFrameArticlesSlice: categoryFrameArticlesSliceReducer,
    /*favorites: favoritesReducer,*/
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
