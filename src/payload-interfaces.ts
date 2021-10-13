import Category from "./category-enums";
import { ArticleRawData } from "./data-interfaces";

export interface ArticlesPayload {
  category: Category;
  article: ArticleRawData;
}
