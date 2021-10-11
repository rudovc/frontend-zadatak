import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import MovieIcon from "@mui/icons-material/Movie";
import LocalHospitalicon from "@mui/icons-material/LocalHospital";
import ScienceIcon from "@mui/icons-material/Science";
import MonitorIcon from "@mui/icons-material/Monitor";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import { CategoryTab } from "../tabEnums";
import { useAppSelector, useAppDispatch } from "../../hooks";
import {
  setActiveCategoryTab,
  selectActiveCategory,
} from "./categoryTabsSlice";
import "../components.scss";

export const CategoryTabs = () => {
  // Active tab is part of redux store b/c it is shared between App (which uses it to filter the articles) and CategoryTabs
  const activeTab = useAppSelector(selectActiveCategory);
  const dispatch = useAppDispatch();

  // Handle clicking on a tab, category passed as argument
  const handleClick = (category: CategoryTab) => {
    dispatch(setActiveCategoryTab(category));
  };

  return (
    <div className="categoryTabs">
      <Tabs orientation="vertical" value={activeTab} aria-label="Tabs">
        <Tab
          icon={<HomeIcon />}
          label="Home"
          onClick={() => {
            handleClick(CategoryTab.Home);
          }}
        />
        <Tab
          icon={<WorkIcon />}
          label="Business"
          onClick={() => {
            handleClick(CategoryTab.Business);
          }}
        />
        <Tab
          icon={<MovieIcon />}
          label="Entertainment"
          onClick={() => {
            handleClick(CategoryTab.Entertainment);
          }}
        />
        <Tab
          icon={<LocalHospitalicon />}
          label="Health"
          onClick={() => {
            handleClick(CategoryTab.Health);
          }}
        />
        <Tab
          icon={<ScienceIcon />}
          label="Science"
          onClick={() => {
            handleClick(CategoryTab.Science);
          }}
        />
        <Tab
          icon={<MonitorIcon />}
          label="Technology"
          onClick={() => {
            handleClick(CategoryTab.Technology);
          }}
        />
        <Tab
          icon={<SportsSoccerIcon />}
          label="Sports"
          onClick={() => {
            handleClick(CategoryTab.Sports);
          }}
        />
      </Tabs>
    </div>
  );
};
