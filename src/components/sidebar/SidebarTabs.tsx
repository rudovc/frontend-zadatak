import { useAppDispatch, useAppSelector } from "../../hooks";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { SidebarTab } from "../tab-enums";
import { selectActiveSidebarTab, setActiveSidebarTab } from "../sidebar-slice";
import { useCallback } from "react";
import { IProps } from "../component-interfaces";

export const SidebarTabs = (props: IProps): JSX.Element => {
  // Active tab is part of redux store b/c it is shared between SidebarTab and SidebarList
  const activeTab = useAppSelector(selectActiveSidebarTab);
  const dispatch = useAppDispatch();

  // Handle clicking on LATEST tab
  const latestClick = useCallback(async () => {
    dispatch(setActiveSidebarTab(SidebarTab.Latest));
  }, [dispatch]);

  // Handle clicking on FAVORITES tab
  const favoritesClick = useCallback(async () => {
    dispatch(setActiveSidebarTab(SidebarTab.Favorites));
  }, [dispatch]);

  return (
    <div className={props.className}>
      <Tabs value={activeTab} aria-label="Tabs">
        <Tab label="Latest" onClick={latestClick} />
        <Tab label="Favorites" onClick={favoritesClick} />
      </Tabs>
    </div>
  );
};
