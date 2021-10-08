import Category from "./categoryEnums";
import { ArticleRawData } from "./componentInterfaces";

export interface ArticlesPayload {
  category: Category;
  article: ArticleRawData;
}
