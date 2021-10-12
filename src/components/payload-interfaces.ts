import Category from "./category-enums";
import { ArticleRawData } from "./component-interfaces";

export interface ArticlesPayload {
  category: Category;
  article: ArticleRawData;
}
