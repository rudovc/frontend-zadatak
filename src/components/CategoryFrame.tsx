import React from "react";
import "./components.scss";
import { CategoryTabs } from "./categoryFrame/CategoryTabs";
import { ArticleGrid } from "./categoryFrame/ArticleGrid";
import { IProps } from "./componentInterfaces";

export class CategoryFrame extends React.Component<IProps> {
  render() {
    return (
      <div className="categoryFrame">
        <CategoryTabs />
        <ArticleGrid articles={this.props.articles} />
      </div>
    );
  }
}
