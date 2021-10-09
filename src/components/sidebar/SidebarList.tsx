import { UIEvent, useCallback, useState } from "react";
import { useAppSelector } from "../../hooks";
import List from "@mui/material/List";
import "../components.scss";
import { SidebarArticlePreview } from "./SidebarList/SidebarArticlePreview";
import { Article } from "../componentInterfaces";
import { selectAllArticles, selectArticlesByID } from "../categoryFrameSlice";
import { selectActiveSidebarTab, selectFavoriteIDs } from "../sidebarSlice";
import { SidebarTab } from "../tabEnums";
import { loadArticlesRawDataPerPageFromAPI } from "../../services";
import CircularProgress from "@mui/material/CircularProgress";
import ListItem from "@mui/material/ListItem";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

export const SidebarList = () => {
  const activeTab = useAppSelector((state) =>
    selectActiveSidebarTab(state.sidebar)
  );
  const favoriteIDs = useAppSelector((state) =>
    selectFavoriteIDs(state.sidebar)
  );
  const favorites = useAppSelector((state) =>
    selectArticlesByID(state.categoryFrameArticles, favoriteIDs)
  );
  const latest = useAppSelector((state) =>
    selectAllArticles(state.categoryFrameArticles)
  );

  const [isLoading, setIsLoading] = useState(false);

  const articlesToDisplay =
    activeTab === SidebarTab.Latest ? latest : favorites; // 2nd return should be favorites!!!*/

  const articleList = () => {
    const mappedArticles = articlesToDisplay.map((element: Article) => (
      <SidebarArticlePreview {...element} />
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

  console.log(articleList);

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
            const currentPages = articlesToDisplay.length / 12;
            loadArticlesRawDataPerPageFromAPI(currentPages + 1).then(() =>
              setIsLoading(false)
            );
          }
        }
      }
    },
    [articlesToDisplay.length, isLoading, activeTab]
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
