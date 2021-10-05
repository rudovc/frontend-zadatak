import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import "../components.scss";

export class CategoryTabs extends React.Component {
  render() {
    return (
      <div className="categoryTabs">
        <Tabs aria-label="Tabs">
          <Tab label="Business" />
          <Tab label="Entertainment" />
          <Tab label="Health" />
          <Tab label="Science" />
          <Tab label="Technology" />
          <Tab label="Sports" />
        </Tabs>
      </div>
    );
  }
}
