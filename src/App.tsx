import "./App.scss";
import { Homepage } from "./components/Homepage";
import { useAppSelector } from "./hooks";
import {
  selectAllArticles,
  selectArticlesByCategory,
} from "./components/categoryFrameSlice";
import { selectActiveCategoryName } from "./components/categoryFrame/categoryTabsSlice";

function App() {
  // Get active category tab from store
  const activeCategory = useAppSelector(selectActiveCategoryName);
  // Get the filtered articles to send as a prop to Homepage, and additionally get all articles to send as a prop to the sidebar
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
