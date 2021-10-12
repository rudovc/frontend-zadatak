import { UIEvent, useCallback, useState } from "react";
import { useAppSelector } from "../../hooks";
import List from "@mui/material/List";
import { SidebarArticlePreview } from "./SidebarList/SidebarArticlePreview";
import { Article } from "../component-interfaces";
import {
  selectAllArticles,
  selectArticlesByID,
  selectPage,
} from "../category-frame-slice";
import { selectActiveSidebarTab, selectFavoriteIDs } from "../sidebar-slice";
import { SidebarTab } from "../tab-enums";
import { loadArticlesRawDataPerPageFromAPI } from "../../utilities";
import CircularProgress from "@mui/material/CircularProgress";
import ListItem from "@mui/material/ListItem";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

export const SidebarList = () => {
  // Get active tab and saved favorite ID keys from store and generate list of favorites by filtering w/ ID
  const activeTab = useAppSelector(selectActiveSidebarTab);
  const favoriteIDs = useAppSelector(selectFavoriteIDs);
  const favorites = useAppSelector((state) =>
    selectArticlesByID(state, favoriteIDs)
  );

  // Keep track of loading, pagination in sidebar and pagination in the overall articles store for infinite scroll functionality
  const [isLoading, setIsLoading] = useState(false);
  const [currentLatestPage, setCurrentLatestPage] = useState(1);
  const allArticlesPage = useAppSelector(selectPage);
  const articleRangeEnd = currentLatestPage * 10;

  // Take only as many articles as needed for current scroll depth
  const allArticles = useAppSelector(selectAllArticles);
  const latest = allArticles.slice(0, articleRangeEnd);

  // Show latest/favorites depending on active tab
  const articlesToShow = activeTab === SidebarTab.Latest ? latest : favorites;

  // Map the shown list of articles to individual preview components
  const articleList = () => {
    const mappedArticles = articlesToShow.map((element: Article) => (
      <SidebarArticlePreview {...element} key={element.id} />
    ));

    // Show a progress circle if the next page is loading
    if (!isLoading) {
      return (
        <Stack
          spacing={1}
          divider={<Divider orientation="horizontal" flexItem></Divider>}
        >
          {mappedArticles}
        </Stack>
      );
    } else {
      return [
        ...mappedArticles,
        <ListItem>
          <CircularProgress style={{ margin: "auto" }} />
        </ListItem>,
      ];
    }
  };

  // Load more articles on scroll down
  const loadMoreArticles = useCallback(
    async (e: UIEvent<HTMLUListElement>) => {
      if (activeTab === SidebarTab.Latest) {
        if (!isLoading) {
          const element = e.currentTarget;
          // Check if bottom of element was reached
          if (
            element.scrollHeight * 0.9 - element.scrollTop <=
            element.clientHeight
          ) {
            setIsLoading(true);
            // Check if there are enough articles in the store to immediately display without sending API request
            if (articleRangeEnd > allArticles.length) {
              // If not, request more articles from API
              await loadArticlesRawDataPerPageFromAPI(allArticlesPage + 1);
              setIsLoading(false);
            } else {
              // If yes, display them and increment page shown
              setCurrentLatestPage(currentLatestPage + 1);
              setIsLoading(false);
            }
          }
        }
      }
    },
    [
      isLoading,
      activeTab,
      currentLatestPage,
      allArticles.length,
      allArticlesPage,
      articleRangeEnd,
    ]
  );

  return (
    // Zasto ne mogu stavit onScroll u div? I je li to uopce dobra ideja
    <div className="sidebarList">
      <List
        onScroll={loadMoreArticles}
        style={{ maxHeight: "80vh", overflow: "auto" }}
      >
        {articleList()}
      </List>
    </div>
  );
};
