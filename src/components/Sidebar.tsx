import React from "react";
import "./components.scss";
import { IProps } from "./componentInterfaces";
import { SidebarTabs } from "./sidebar/SidebarTabs";
import { SidebarList } from "./sidebar/SidebarList";

export class Sidebar extends React.Component<IProps> {
  render() {
    return (
      <div className="sidebar">
        <SidebarTabs />
        <SidebarList articles={this.props.articles} />
      </div>
    );
  }
}
