import { useAppDispatch, useAppSelector } from "../../hooks";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { SidebarTab } from "../tabEnums";
import Category from "../categoryEnums";
import "../components.scss";
import API from "../../api";
import {
  updateArticlesInSidebar,
  updateArticlesToShowFavorites,
} from "../sidebarSlice";
import { setActiveSidebarTab } from "../sidebarSlice";
import { useCallback } from "react";

const getLatestArticles = async () => {
  const data = API.getArticles(Category.Latest);
  return data;
};

export const SidebarTabs = () => {
  const activeTab = useAppSelector((state) => state.sidebar.tabs.value);
  const dispatch = useAppDispatch();

  const latestClick = useCallback(async () => {
    dispatch(setActiveSidebarTab(SidebarTab.Latest));
    const response = getLatestArticles();
    dispatch(updateArticlesInSidebar(await response));
  }, [dispatch]);

  const favoritesClick = useCallback(async () => {
    dispatch(setActiveSidebarTab(SidebarTab.Favorites));
    dispatch(updateArticlesToShowFavorites());
  }, [dispatch]);

  return (
    <div className="sidebarTabs">
      <Tabs value={activeTab} aria-label="Tabs">
        <Tab label="Latest" onClick={latestClick} />
        <Tab label="Favorites" onClick={favoritesClick} />
      </Tabs>
    </div>
  );
};
