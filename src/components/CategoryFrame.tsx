import { CategoryTabs } from "./category-frame/CategoryTabs";
import { ArticleGrid } from "./category-frame/ArticleGrid";
import { useState, useCallback, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import styles from "./styles/categoryframe.module.scss";
import { CategoryFrameProps } from "../interfaces/component-interfaces";
import { selectPage } from "./slices/category-frame-slice";
import { useAppSelector } from "../hooks";
import { loadArticlesRawDataPerPageFromAPI } from "../utilities";
import { isMobileOnly } from "react-device-detect";
import { CategoryTab } from "./tab-enums";

export const CategoryFrame = (props: CategoryFrameProps): JSX.Element => {
  // Keep track of loading and pagination in grid (have 15 articles per page)
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  // Sad search ne radi lmao tj mislin da radi al triba refreshat sve
  const filteredArticleList = [...props.articles].filter((element) => {
    const filter = props.nameFilter.toLowerCase().split(" ");
    const title = element.title.toLowerCase();
    if (props.nameFilter === "") {
      return true;
    } else {
      return filter.every((word) => title.includes(word));
    }
  });

  const paginationCount = Math.ceil(filteredArticleList.length / 16);

  // Keep track of pagination in overall store
  const allArticlesPage = useAppSelector(selectPage);

  // Set range of articles to be displayed depending on the current page
  const articleRange = {
    start: currentPage * 16 - 16,
    end: currentPage * 16,
  };

  useEffect(() => {
    if (currentPage > paginationCount) {
      setCurrentPage(1);
    }
  }, [currentPage, paginationCount]);

  // Handle clicking on new category tab
  const handleClick = <T extends unknown>(category: T) => {
    if (typeof props.onCategoryTabChange !== "undefined") {
      props.onCategoryTabChange(category as unknown as CategoryTab);
    }
  };

  // Handle switching to a new page
  const handleChange = useCallback(
    async (e: React.ChangeEvent<unknown>, page: number): Promise<void> => {
      if (props.nameFilter === "") {
        if (!isLoading) {
          setCurrentPage(page);
          // Check if there are enough articles in the store to immediately display without sending API request
          if (page >= paginationCount - 1) {
            setIsLoading(true);
            // If not, request more articles from API
            await loadArticlesRawDataPerPageFromAPI(allArticlesPage + 1);
            setIsLoading(false);
          }
        }
      } else {
        setCurrentPage(page);
      }
    },
    [paginationCount, allArticlesPage, isLoading, props.nameFilter]
  );

  if (isMobileOnly) {
    return (
      <div className={props.className}>
        <ArticleGrid
          articles={filteredArticleList.slice(
            articleRange.start,
            articleRange.end
          )}
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
        <CategoryTabs
          className={styles.categorytabs}
          onClick={handleClick}
          value={props.categoryTab}
        />
        <div className={styles.articlegridcontainer}>
          <ArticleGrid
            onCategoryClick={handleClick}
            articles={filteredArticleList.slice(
              articleRange.start,
              articleRange.end
            )}
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
