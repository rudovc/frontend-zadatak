import { CategoryTabs } from "./category-frame/CategoryTabs";
import { ArticleGrid } from "./category-frame/ArticleGrid";
import { useState, useCallback } from "react";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import { IProps } from "./component-interfaces";
import { Articles } from "../data-interfaces";
import { selectPage } from "./category-frame-slice";
import { useAppSelector } from "../hooks";
import { loadArticlesRawDataPerPageFromAPI } from "../utilities";

export const CategoryFrame = (props: Articles & IProps) => {
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
    async (e: React.ChangeEvent<unknown>, page: number) => {
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

  return (
    <div className={props.className}>
      <Stack direction="row" spacing={1}>
        <CategoryTabs />
        <Stack spacing={1} alignItems="center">
          <ArticleGrid
            articles={allArticles.slice(articleRange.start, articleRange.end)}
            nameFilter={props.nameFilter}
          />
          <Pagination
            page={currentPage}
            count={paginationCount}
            siblingCount={1}
            onChange={handleChange}
          />
        </Stack>
      </Stack>
    </div>
  );
};
