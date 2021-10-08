import "./App.scss";
import { Homepage } from "./components/Homepage";
import { useAppSelector } from "./hooks";
import {
  selectAllArticles,
  selectArticlesByCategory,
} from "./components/categoryFrameSlice";

function App() {
  const displayedArticles = {
    displayedArticlesByCategory: useAppSelector((state) => {
      return selectArticlesByCategory(
        state.categoryFrameArticles,
        state.categoryTabs.categoryName
      );
    }),
    displayedArticlesInSidebar: useAppSelector((state) => {
      return selectAllArticles(state.categoryFrameArticles);
    }),
  };

  return (
    <Homepage
      categoryArticles={displayedArticles.displayedArticlesByCategory}
      sidebarArticles={displayedArticles.displayedArticlesInSidebar}
    />
  );
}

export default App;
