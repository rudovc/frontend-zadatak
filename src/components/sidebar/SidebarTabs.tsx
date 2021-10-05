import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import "../components.scss";

export const SidebarTabs = () => {
  return (
    <div className="sidebarTabs">
      <Tabs aria-label="Tabs">
        <Tab label="Latest" />
        <Tab label="Favorites" />
      </Tabs>
    </div>
  );
};
