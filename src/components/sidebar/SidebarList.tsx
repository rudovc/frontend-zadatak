import { UIEvent, useCallback, useState } from "react";
import { useAppSelector } from "../../hooks";
import List from "@mui/material/List";
import "../components.scss";
import { SidebarArticlePreview } from "./SidebarList/SidebarArticlePreview";
import { Article } from "../componentInterfaces";
import {
  selectAllArticles,
  selectArticlesByID,
  selectPage,
} from "../categoryFrameSlice";
import { selectActiveSidebarTab, selectFavoriteIDs } from "../sidebarSlice";
import { SidebarTab } from "../tabEnums";
import { loadArticlesRawDataPerPageFromAPI } from "../../utilities";
import CircularProgress from "@mui/material/CircularProgress";
import ListItem from "@mui/material/ListItem";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

export const SidebarList = () => {
  const activeTab = useAppSelector(selectActiveSidebarTab);
  const favoriteIDs = useAppSelector(selectFavoriteIDs);
  const favorites = useAppSelector((state) =>
    selectArticlesByID(state, favoriteIDs)
  );

  const [isLoading, setIsLoading] = useState(false);
  const [currentLatestPage, setCurrentLatestPage] = useState(1);
  const allArticlesPage = useAppSelector(selectPage);
  const articleRangeEnd = currentLatestPage * 10;

  const allArticles = useAppSelector(selectAllArticles);
  const latest = allArticles.slice(0, articleRangeEnd);

  const sortedArticleList =
    activeTab === SidebarTab.Latest
      ? latest.sort((o1, o2) => {
          if (o1.publishedAt !== null && o2.publishedAt !== null) {
            const date1 = +new Date(o1.publishedAt);
            const date2 = +new Date(o2.publishedAt);
            return date2 - date1;
          }
          return -1;
        })
      : favorites;

  const articleList = () => {
    const mappedArticles = sortedArticleList.map((element: Article) => (
      <SidebarArticlePreview {...element} key={element.id} />
    ));

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

  const loadMoreArticles = useCallback(
    async (e: UIEvent<HTMLUListElement>) => {
      if (activeTab === SidebarTab.Latest) {
        if (!isLoading) {
          const element = e.currentTarget;
          if (
            element.scrollHeight * 0.9 - element.scrollTop <=
            element.clientHeight
          ) {
            setIsLoading(true);
            if (articleRangeEnd > allArticles.length) {
              await loadArticlesRawDataPerPageFromAPI(allArticlesPage + 1);
              setIsLoading(false);
            } else {
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
    // zasto ne mogu stavit onScroll u div? i je li to uopce dobra ideja
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
