import React from "react";
import { ArticleProp } from "../componentInterfaces";
import List from "@mui/material/List";
import { SidebarArticlePreview } from "./SidebarList/SidebarArticlePreview";
import "../components.scss";

export const SidebarList = (props: ArticleProp) => {
  const articleList = props.articles.map((element) => (
    <SidebarArticlePreview {...element} />
  ));
  return (
    <div className="sidebarList">
      <List style={{ maxHeight: "100vh", overflow: "auto" }}>
        {articleList}
      </List>
    </div>
  );
};
