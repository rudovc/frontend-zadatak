import "./App.scss";
import { Homepage } from "./components/Homepage";
import { useAppSelector } from "./hooks";
import {
  selectAllArticles,
  selectArticlesByCategory,
} from "./components/slices/category-frame-slice";
import { useState } from "react";
import { isMobileOnly } from "react-device-detect";
import Category from "./category-enums";
import { CategoryTab } from "./components/tab-enums";
import styles from "./app.module.scss";

function App(): JSX.Element {
  const [activeCategory, setActiveCategory] = useState(Category.Home);
  const [activeCategoryTab, setActiveCategoryTab] = useState(CategoryTab.Home);
  const handleCategoryTabChange = (category: CategoryTab) => {
    const newCategory = Object.entries(Category)[category][1];
    setActiveCategoryTab(category);
    setActiveCategory(newCategory);
  };
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
        onCategoryTabChange={handleCategoryTabChange}
        categoryTab={activeCategoryTab}
      />
    );
  } else {
    return (
      <Homepage
        className={styles.homepagedesktop}
        categoryArticles={articles.byCategory}
        sidebarArticles={articles.inSidebar}
        onCategoryTabChange={handleCategoryTabChange}
        categoryTab={activeCategoryTab}
      />
    );
  }
}

export default App;
