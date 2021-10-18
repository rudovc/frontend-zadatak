import { CategoryTabs } from "./category-frame/CategoryTabs";
import { ArticleGrid } from "./category-frame/ArticleGrid";
import { useState, useCallback } from "react";
import Pagination from "@mui/material/Pagination";
import styles from "./categoryframe.module.scss";
import { IProps } from "./component-interfaces";
import { Articles } from "../data-interfaces";
import { selectPage } from "./category-frame-slice";
import { useAppSelector } from "../hooks";
import { loadArticlesRawDataPerPageFromAPI } from "../utilities";
import { isMobileOnly } from "react-device-detect";

export const CategoryFrame = (props: Articles & IProps): JSX.Element => {
  // Keep track of loading and pagination in grid (have 15 articles per page)
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const paginationCount = Math.ceil(props.articles.length / 16);

  // Keep track of pagination in overall store
  const allArticles = props.articles;
  const allArticlesPage = useAppSelector(selectPage);

  // Set range of articles to be displayed depending on the current page
  const articleRange = {
    start: currentPage * 16 - 16,
    end: currentPage * 16,
  };

  // Handle switching to a new page
  const handleChange = useCallback(
    async (e: React.ChangeEvent<unknown>, page: number): Promise<void> => {
      if (!isLoading) {
        setCurrentPage(page);
        // Check if there are enough articles in the store to immediately display without sending API request
        if (currentPage >= paginationCount - 1) {
          setIsLoading(true);
          // If not, request more articles from API
          await loadArticlesRawDataPerPageFromAPI(allArticlesPage + 1);
          setIsLoading(false);
        }
      }
    },
    [currentPage, paginationCount, allArticlesPage, isLoading]
  );

  if (isMobileOnly) {
    return (
      <div className={props.className}>
        <ArticleGrid
          articles={allArticles.slice(articleRange.start, articleRange.end)}
          nameFilter={props.nameFilter}
        />
        <Pagination
          className={styles.pagination}
          page={currentPage}
          count={paginationCount}
          siblingCount={0}
          onChange={handleChange}
        />
      </div>
    );
  } else {
    return (
      <div className={props.className}>
        <CategoryTabs className={styles.categorytabs} />
        <div className={styles.articlegridcontainer}>
          <ArticleGrid
            articles={allArticles.slice(articleRange.start, articleRange.end)}
            nameFilter={props.nameFilter}
          />
          <Pagination
            className={styles.pagination}
            page={currentPage}
            count={paginationCount}
            siblingCount={1}
            onChange={handleChange}
          />
        </div>
      </div>
    );
  }
};
