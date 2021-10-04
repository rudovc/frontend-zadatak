export interface Article {
  source: {
    name: string;
  };
  author: string | null;
  title: string | null;
  description: string | null;
  url: string | null;
  publishedAt: string | null;
  content: string | null;
}

export interface IProps {
  articles: Article[];
}
