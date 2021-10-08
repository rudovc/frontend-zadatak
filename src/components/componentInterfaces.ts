export interface ArticleRawData {
  id?: string;
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
export interface Article {
  category: string;
  id: string;
  source: {
    name: string;
  };
  author: string | null;
  title: string;
  description: string | null;
  url: string | null;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
}

export interface Articles {
  articles: Article[];
  nameFilter: string;
}

export interface HomepageProps {
  categoryArticles: Article[];
  sidebarArticles: Article[];
}
