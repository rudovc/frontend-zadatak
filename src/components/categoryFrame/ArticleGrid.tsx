import React from "react";
import "../components.scss";
import { IProps } from "../componentInterfaces";
import { ArticlePreview } from "./ArticleGrid/ArticlePreview";
import * as mui from "@material-ui/core";

class ArticleGrid extends React.Component<IProps> {
  render() {
    const articleList = this.props.articles.map((element) => (
      <mui.Grid item xs={4}>
        <ArticlePreview {...element} />
      </mui.Grid>
    ));
    return (
      <mui.Grid container spacing={2}>
        {articleList}
      </mui.Grid>
    );
  }
}

export { ArticleGrid };
