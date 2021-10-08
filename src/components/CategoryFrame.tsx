import "./components.scss";
import { CategoryTabs } from "./categoryFrame/CategoryTabs";
import { ArticleGrid } from "./categoryFrame/ArticleGrid";
import { Articles } from "./componentInterfaces";

export const CategoryFrame = (props: Articles) => {
  return (
    <div className="categoryFrame">
      <CategoryTabs />
      <ArticleGrid articles={props.articles} nameFilter={props.nameFilter} />
    </div>
  );
};
