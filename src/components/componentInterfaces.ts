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

export interface HomepageProps {
  categoryArticles: {
    articles: Article[];
  };
  sidebarArticles: {
    articles: Article[];
  };
}
