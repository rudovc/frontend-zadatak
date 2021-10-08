import { useAppDispatch, useAppSelector } from "../../hooks";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { SidebarTab } from "../tabEnums";
import "../components.scss";
import { updateArticlesInSidebar } from "../sidebarSlice";
import { setActiveSidebarTab } from "../sidebarSlice";
import { useCallback } from "react";

export const SidebarTabs = () => {
  const activeTab = useAppSelector((state) => state.sidebar.activeTab);

  const latestArticles = useAppSelector(
    (state) => state.categoryFrameArticles.articles
  );
  const dispatch = useAppDispatch();

  const latestClick = useCallback(async () => {
    dispatch(setActiveSidebarTab(SidebarTab.Latest));
    dispatch(updateArticlesInSidebar(latestArticles));
  }, [dispatch, latestArticles]);

  const favoritesClick = useCallback(async () => {
    dispatch(setActiveSidebarTab(SidebarTab.Favorites));
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
