import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import "../components.scss";

export const CategoryTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="categoryTabs">
      <Tabs value={activeTab} aria-label="Tabs">
        <Tab label="Business" onClick={() => setActiveTab(0)} />
        <Tab label="Entertainment" onClick={() => setActiveTab(1)} />
        <Tab label="Health" onClick={() => setActiveTab(2)} />
        <Tab label="Science" onClick={() => setActiveTab(3)} />
        <Tab label="Technology" onClick={() => setActiveTab(4)} />
        <Tab label="Sports" onClick={() => setActiveTab(5)} />
      </Tabs>
    </div>
  );
};
