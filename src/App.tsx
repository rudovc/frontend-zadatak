import "./App.scss";
import { Homepage } from "./components/Homepage";
import { useAppSelector } from "./hooks";
import {
  selectAllArticles,
  selectArticlesByCategory,
} from "./components/categoryFrameSlice";
import { selectActiveCategoryName } from "./components/categoryFrame/categoryTabsSlice";

function App() {
  const activeCategory = useAppSelector(selectActiveCategoryName);
  const articles = {
    byCategory: useAppSelector((state) => {
      return selectArticlesByCategory(state, activeCategory);
    }),
    inSidebar: useAppSelector(selectAllArticles),
  };

  return (
    <Homepage
      categoryArticles={articles.byCategory}
      sidebarArticles={articles.inSidebar}
    />
  );
}

export default App;
