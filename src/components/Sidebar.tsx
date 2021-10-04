import React from "react";
import "./components.scss";
import { SidebarTabs } from "./sidebar/SidebarTabs";
import { SidebarList } from "./sidebar/SidebarList";

export class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <SidebarTabs />
        <SidebarList />
      </div>
    );
  }
}
