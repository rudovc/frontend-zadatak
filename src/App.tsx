import "./App.scss";
import { Homepage } from "./components/Homepage";
import { useAppSelector } from "./hooks";
import {
  selectAllArticles,
  selectArticlesByCategory,
} from "./components/category-frame-slice";
import { selectActiveCategoryName } from "./components/category-frame/category-tabs-slice";
import { isMobileOnly } from "react-device-detect";
import styles from "./app.module.scss";

function App(): JSX.Element {
  // Get active category tab from store
  const activeCategory = useAppSelector(selectActiveCategoryName);
  // Get the filtered articles to send as a prop to Homepage, and additionally get all articles to send as a prop to the sidebar
  const articles = {
    byCategory: useAppSelector((state) => {
      return selectArticlesByCategory(state, activeCategory);
    }),
    inSidebar: useAppSelector(selectAllArticles),
  };
  if (isMobileOnly) {
    return (
      <Homepage
        className={styles.homepagemobile}
        categoryArticles={articles.byCategory}
        sidebarArticles={articles.inSidebar}
      />
    );
  } else {
    return (
      <Homepage
        className={styles.homepagedesktop}
        categoryArticles={articles.byCategory}
        sidebarArticles={articles.inSidebar}
      />
    );
  }
}

export default App;
