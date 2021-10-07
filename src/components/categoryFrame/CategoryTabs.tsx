import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { CategoryTab } from "../tabEnums";
import Category from "../categoryEnums";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { setActiveCategoryTab } from "./categoryTabsSlice";
import API from "../../api";
import "../components.scss";
import { updateArticlesInCategoryFrame } from "../categoryFrameSlice";

const getArticles = async (category: Category) => {
  const data = API.getArticles(category);
  return data;
};

export const CategoryTabs = () => {
  const activeTab = useAppSelector((state) => state.categoryTabs.value);
  const dispatch = useAppDispatch();

  return (
    <div className="categoryTabs">
      <Tabs value={activeTab} aria-label="Tabs">
        <Tab
          label="Business"
          onClick={async () => {
            dispatch(setActiveCategoryTab(CategoryTab.Business));
            const response = getArticles(Category.Business);
            dispatch(updateArticlesInCategoryFrame(await response));
          }}
        />
        <Tab
          label="Entertainment"
          onClick={async () => {
            dispatch(setActiveCategoryTab(CategoryTab.Entertainment));
            const response = getArticles(Category.Entertainment);
            dispatch(updateArticlesInCategoryFrame(await response));
          }}
        />
        <Tab
          label="Health"
          onClick={async () => {
            dispatch(setActiveCategoryTab(CategoryTab.Health));
            const response = getArticles(Category.Health);
            dispatch(updateArticlesInCategoryFrame(await response));
          }}
        />
        <Tab
          label="Science"
          onClick={async () => {
            dispatch(setActiveCategoryTab(CategoryTab.Science));
            const response = getArticles(Category.Science);
            dispatch(updateArticlesInCategoryFrame(await response));
          }}
        />
        <Tab
          label="Technology"
          onClick={async () => {
            dispatch(setActiveCategoryTab(CategoryTab.Technology));
            const response = getArticles(Category.Technology);
            dispatch(updateArticlesInCategoryFrame(await response));
          }}
        />
        <Tab
          label="Sports"
          onClick={async () => {
            dispatch(setActiveCategoryTab(CategoryTab.Sports));
            const response = getArticles(Category.Sports);
            dispatch(updateArticlesInCategoryFrame(await response));
          }}
        />
      </Tabs>
    </div>
  );
};
