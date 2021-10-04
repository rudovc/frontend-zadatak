import React from "react";
import "../components.scss";
import { IProps } from "../componentInterfaces";
import { ArticlePreview } from "./ArticleGrid/ArticlePreview";

class ArticleGrid extends React.Component<IProps> {
  render() {
    const articleList = this.props.articles.map((element) => (
      <ArticlePreview {...element} />
    ));
    return <div className="articleGrid">{articleList}</div>;
  }
}

export { ArticleGrid };
