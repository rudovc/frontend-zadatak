import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { SidebarTab } from "../tabEnums";
import "../components.scss";

export const SidebarTabs = () => {
  const [activeTab, setActiveTab] = useState(SidebarTab.Latest);
  return (
    <div className="sidebarTabs">
      <Tabs value={activeTab} aria-label="Tabs">
        <Tab label="Latest" onClick={() => setActiveTab(SidebarTab.Latest)} />
        <Tab
          label="Favorites"
          onClick={() => setActiveTab(SidebarTab.Favorites)}
        />
      </Tabs>
    </div>
  );
};
