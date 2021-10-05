import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { CategoryTab } from "../tabEnums";
import "../components.scss";

export const CategoryTabs = () => {
  const [activeTab, setActiveTab] = useState(CategoryTab.Business);
  return (
    <div className="categoryTabs">
      <Tabs value={activeTab} aria-label="Tabs">
        <Tab
          label="Business"
          onClick={() => setActiveTab(CategoryTab.Business)}
        />
        <Tab
          label="Entertainment"
          onClick={() => setActiveTab(CategoryTab.Entertainment)}
        />
        <Tab label="Health" onClick={() => setActiveTab(CategoryTab.Health)} />
        <Tab
          label="Science"
          onClick={() => setActiveTab(CategoryTab.Science)}
        />
        <Tab
          label="Technology"
          onClick={() => setActiveTab(CategoryTab.Technology)}
        />
        <Tab label="Sports" onClick={() => setActiveTab(CategoryTab.Sports)} />
      </Tabs>
    </div>
  );
};
