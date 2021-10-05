import "./components.scss";
import { CategoryTabs } from "./categoryFrame/CategoryTabs";
import { useAppSelector } from "../hooks";
import { ArticleGrid } from "./categoryFrame/ArticleGrid";
/*import { ArticlesProp } from "./componentInterfaces";*/
import data from "../data/dummyData-business.json";

export const CategoryFrame = () => {
  const axiosResponse = useAppSelector(
    (state) => state.categoryFrameArticlesSlice.data
  );
  console.log(axiosResponse);
  return (
    <div className="categoryFrame">
      <CategoryTabs />
      <ArticleGrid articles={data.articles} />
    </div>
  );
};
