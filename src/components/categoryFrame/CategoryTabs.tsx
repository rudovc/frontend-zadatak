import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { CategoryTab } from "../tabEnums";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { setActiveCategoryTab } from "./categoryTabsSlice";
import "../components.scss";

export const CategoryTabs = () => {
  const activeTab = useAppSelector((state) => state.categoryTabs.value);
  const dispatch = useAppDispatch();

  return (
    <div className="categoryTabs">
      <Tabs value={activeTab} aria-label="Tabs">
        <Tab
          label="Home"
          onClick={async () => {
            dispatch(setActiveCategoryTab(CategoryTab.Home));
          }}
        />
        <Tab
          label="Business"
          onClick={async () => {
            dispatch(setActiveCategoryTab(CategoryTab.Business));
          }}
        />
        <Tab
          label="Entertainment"
          onClick={async () => {
            dispatch(setActiveCategoryTab(CategoryTab.Entertainment));
          }}
        />
        <Tab
          label="Health"
          onClick={async () => {
            dispatch(setActiveCategoryTab(CategoryTab.Health));
          }}
        />
        <Tab
          label="Science"
          onClick={async () => {
            dispatch(setActiveCategoryTab(CategoryTab.Science));
          }}
        />
        <Tab
          label="Technology"
          onClick={async () => {
            dispatch(setActiveCategoryTab(CategoryTab.Technology));
          }}
        />
        <Tab
          label="Sports"
          onClick={async () => {
            dispatch(setActiveCategoryTab(CategoryTab.Sports));
          }}
        />
      </Tabs>
    </div>
  );
};
