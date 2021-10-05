import React from "react";
import "../components.scss";
import { IProps } from "../componentInterfaces";
import { ArticlePreview } from "./ArticleGrid/ArticlePreview";
import Grid from "@mui/material/Grid";

class ArticleGrid extends React.Component<IProps> {
  render() {
    const articleList = this.props.articles.map((element) => (
      <Grid item xs={3}>
        <ArticlePreview {...element} />
      </Grid>
    ));
    return (
      <div className="articleGrid">
        <Grid container spacing={1}>
          {articleList}
        </Grid>
      </div>
    );
  }
}

export { ArticleGrid };
