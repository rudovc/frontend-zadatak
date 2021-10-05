import { configureStore } from "@reduxjs/toolkit";
import categoryTabReducer from "./components/categoryFrame/categoryTabsSlice";
// ...

const store = configureStore({
  reducer: {
    categoryTabs: categoryTabReducer,
    /*    sidebarTabs: sideTabsReducer,
    favorites: favoritesReducer,*/
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
