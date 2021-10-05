import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import "../components.scss";

export const CategoryTabs = () => {
  return (
    <div className="categoryTabs">
      <Tabs value={0} aria-label="Tabs">
        <Tab label="Business" />
        <Tab label="Entertainment" />
        <Tab label="Health" />
        <Tab label="Science" />
        <Tab label="Technology" />
        <Tab label="Sports" />
      </Tabs>
    </div>
  );
};
