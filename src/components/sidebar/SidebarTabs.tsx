import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import "../components.scss";

export class SidebarTabs extends React.Component {
  render() {
    return (
      <div className="sidebarTabs">
        <Tabs aria-label="Tabs">
          <Tab label="Latest" />
          <Tab label="Favorites" />
        </Tabs>
      </div>
    );
  }
}
