import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { SidebarTab } from "../tab-enums";
import { TabProps } from "../../interfaces/component-interfaces";

export const SidebarTabs = (props: TabProps): JSX.Element => {
  const activeTab = props.value;

  const handleClick = (newTab: SidebarTab) => {
    if (typeof props.onClick !== "undefined") {
      props.onClick<SidebarTab>(newTab);
    }
  };

  return (
    <div className={props.className}>
      <Tabs value={activeTab} aria-label="Tabs">
        <Tab
          label="Latest"
          onClick={() => {
            handleClick(SidebarTab.Latest);
          }}
        />
        <Tab
          label="Favorites"
          onClick={() => {
            handleClick(SidebarTab.Favorites);
          }}
        />
      </Tabs>
    </div>
  );
};
