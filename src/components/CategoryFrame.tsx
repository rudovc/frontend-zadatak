import { CategoryTabs } from "./category-frame/CategoryTabs";
import { ArticleGrid } from "./category-frame/ArticleGrid";
import { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import styles from "./styles/categoryframe.module.scss";
import { CategoryFrameProps } from "../interfaces/component-interfaces";
import { selectPage } from "./slices/category-frame-slice";
import { useAppSelector } from "../hooks";
import { loadArticlesRawDataPerPageFromAPI } from "../utilities";
import { isMobileOnly } from "react-device-detect";
import { CategoryTab } from "./tab-enums";
import { Article } from "../interfaces/data-interfaces";

const filterAndSortArticles = (articles: Article[], nameFilter: string) => {
  const filteredArticles = [...articles].filter((element) => {
    const filter = nameFilter.toLowerCase().split(" ");
    const title = element.title.toLowerCase();
    if (nameFilter === "") {
      return true;
    } else {
      return filter.every((word) => title.includes(word));
    }
  });

  return filteredArticles.sort((o1, o2) => {
    if (o1.publishedAt !== null && o2.publishedAt !== null) {
      const date1 = +new Date(o1.publishedAt);
      const date2 = +new Date(o2.publishedAt);
      return date2 - date1;
    }
    return -1;
  });
};

export const CategoryFrame = (props: CategoryFrameProps): JSX.Element => {
  // Keep track of loading and pagination in grid (have 15 articles per page)
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const articleList = filterAndSortArticles(props.articles, props.nameFilter);

  const paginationCount = Math.ceil(articleList.length / 16);

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
  const handleCategoryChange = <T extends unknown>(category: T) => {
    if (typeof props.onCategoryTabChange !== "undefined") {
      props.onCategoryTabChange(category as unknown as CategoryTab);
    }
  };

  // Handle switching to a new page
  const handlePageChange = async (
    e: React.ChangeEvent<unknown>,
    page: number
  ): Promise<void> => {
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
  };

  if (isMobileOnly) {
    return (
      <div className={props.className}>
        <ArticleGrid
          onCategoryClick={handleCategoryChange}
          articles={articleList.slice(articleRange.start, articleRange.end)}
        />
        <Pagination
          className={styles.pagination}
          page={currentPage}
          count={paginationCount}
          siblingCount={0}
          onChange={handlePageChange}
        />
      </div>
    );
  } else {
    return (
      <div className={props.className}>
        <CategoryTabs
          className={styles.categorytabs}
          onClick={handleCategoryChange}
          value={props.categoryTab}
        />
        <div className={styles.articlegridcontainer}>
          <ArticleGrid
            onCategoryClick={handleCategoryChange}
            articles={articleList.slice(articleRange.start, articleRange.end)}
          />
          <Pagination
            className={styles.pagination}
            page={currentPage}
            count={paginationCount}
            siblingCount={1}
            onChange={handlePageChange}
          />
        </div>
      </div>
    );
  }
};
