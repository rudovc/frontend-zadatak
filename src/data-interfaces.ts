import Category from "./category-enums";

export interface ArticleRawData {
  source: {
    name: string;
  };
  author: string | null;
  title: string | null;
  description: string | null;
  url: string | null;
  urlToImage: string | null;
  publishedAt: string | null;
  content: string | null;
}
export interface ArticlesRawData {
  articles: ArticleRawData[];
}
export interface Article extends Required<NonNullable<ArticleRawData>> {
  category: Category;
  id: string;
  source: {
    name: string;
  };
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
}

export interface Articles {
  articles: Article[];
  nameFilter: string;
}
