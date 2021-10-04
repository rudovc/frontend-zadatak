import React from "react";
import { Article } from "../../componentInterfaces";

export class ArticlePreview extends React.Component<Article> {
  render() {
    return (
      <div className="article-preview">
        <div className="article-preview-body">
          <h5 className="article-preview-title">{this.props.title}</h5>
          <hr />
          <img
            className="article-preview-img-top"
            src="img src"
            alt="img description"
          />
          <p className="article-description">{this.props.description}</p>
        </div>
      </div>
    );
  }
}
