import React from "react";
import { IProps } from "../componentInterfaces";
import Stack from "@mui/material/Stack";
import List from "@mui/material/List";
import { SidebarArticlePreview } from "./SidebarList/SidebarArticlePreview";
import "../components.scss";

export class SidebarList extends React.Component<IProps> {
  render() {
    const articleList = this.props.articles.map((element) => (
      <SidebarArticlePreview {...element} />
    ));
    return (
      <div className="sidebarList">
        <List style={{ maxHeight: "100vh", overflow: "auto" }}>
          {articleList}
        </List>
      </div>
    );
  }
}
