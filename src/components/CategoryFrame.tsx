import "./components.scss";
import { CategoryTabs } from "./categoryFrame/CategoryTabs";
import { ArticleGrid } from "./categoryFrame/ArticleGrid";
import { ArticlesProp } from "./componentInterfaces";

export const CategoryFrame = (props: ArticlesProp) => {
  return (
    <div className="categoryFrame">
      <CategoryTabs />
      <ArticleGrid articles={props.articles} />
    </div>
  );
};
