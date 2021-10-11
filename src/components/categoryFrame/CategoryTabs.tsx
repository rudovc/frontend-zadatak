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
  const activeTab = useAppSelector(selectActiveCategory);
  const dispatch = useAppDispatch();

  return (
    <div className="categoryTabs">
      <Tabs orientation="vertical" value={activeTab} aria-label="Tabs">
        <Tab
          icon={<HomeIcon />}
          label="Home"
          onClick={async () => {
            dispatch(setActiveCategoryTab(CategoryTab.Home));
          }}
        />
        <Tab
          icon={<WorkIcon />}
          label="Business"
          onClick={async () => {
            dispatch(setActiveCategoryTab(CategoryTab.Business));
          }}
        />
        <Tab
          icon={<MovieIcon />}
          label="Entertainment"
          onClick={async () => {
            dispatch(setActiveCategoryTab(CategoryTab.Entertainment));
          }}
        />
        <Tab
          icon={<LocalHospitalicon />}
          label="Health"
          onClick={async () => {
            dispatch(setActiveCategoryTab(CategoryTab.Health));
          }}
        />
        <Tab
          icon={<ScienceIcon />}
          label="Science"
          onClick={async () => {
            dispatch(setActiveCategoryTab(CategoryTab.Science));
          }}
        />
        <Tab
          icon={<MonitorIcon />}
          label="Technology"
          onClick={async () => {
            dispatch(setActiveCategoryTab(CategoryTab.Technology));
          }}
        />
        <Tab
          icon={<SportsSoccerIcon />}
          label="Sports"
          onClick={async () => {
            dispatch(setActiveCategoryTab(CategoryTab.Sports));
          }}
        />
      </Tabs>
    </div>
  );
};
