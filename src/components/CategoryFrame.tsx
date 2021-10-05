import "./components.scss";
import { CategoryTabs } from "./categoryFrame/CategoryTabs";
import { ArticleGrid } from "./categoryFrame/ArticleGrid";
import { ArticleProp } from "./componentInterfaces";

export const CategoryFrame = (props: ArticleProp) => {
  return (
    <div className="categoryFrame">
      <CategoryTabs />
      <ArticleGrid articles={props.articles} />
    </div>
  );
};
