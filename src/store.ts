import { configureStore } from "@reduxjs/toolkit";
import categoryTabReducer from "./components/categoryFrame/categoryTabsSlice";
import sidebarTabReducer from "./components/sidebar/sidebarTabsSlice";
import sidebarReducer, {
  updateArticlesInSidebar,
} from "./components/sidebarSlice";
import categoryFrameReducer, {
  updateArticlesInCategoryFrame,
} from "./components/categoryFrameSlice";
import API from "./api";
import Category from "./components/categoryEnums";

const store = configureStore({
  reducer: {
    categoryTabs: categoryTabReducer,
    sidebarTabs: sidebarTabReducer,
    categoryFrameArticles: categoryFrameReducer,
    sidebarArticles: sidebarReducer,
    /*favorites: favoritesReducer,*/
  },
});

async function initialSetup() {
  const business = await API.getArticles(Category.Business);
  const latest = await API.getArticles(Category.Latest);
  store.dispatch(updateArticlesInCategoryFrame(business));
  store.dispatch(updateArticlesInSidebar(latest));
}
initialSetup();

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
