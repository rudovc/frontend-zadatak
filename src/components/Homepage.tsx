import React from "react";
import "./components.scss";
import { CategoryFrame } from "./CategoryFrame";
import { Sidebar } from "./Sidebar";
import { IProps } from "./componentInterfaces";

export class Homepage extends React.Component<IProps> {
  render() {
    return (
      <div className="homeRow">
        <CategoryFrame articles={this.props.articles} />
        <Sidebar />
      </div>
    );
  }
}
