import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import "../components.scss";

export const SidebarTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="sidebarTabs">
      <Tabs value={activeTab} aria-label="Tabs">
        <Tab label="Latest" onClick={() => setActiveTab(0)} />
        <Tab label="Favorites" onClick={() => setActiveTab(1)} />
      </Tabs>
    </div>
  );
};
