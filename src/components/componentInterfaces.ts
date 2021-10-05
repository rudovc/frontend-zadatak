export interface Article {
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

export interface ArticlesProp {
  articles: Article[];
}

export interface CategoryList {
  general: ArticlesProp;
  business: ArticlesProp;
  entertainment: ArticlesProp;
  health: ArticlesProp;
  science: ArticlesProp;
  sports: ArticlesProp;
  technology: ArticlesProp;
}

export interface HomepageProps {
  data: CategoryList;
}
