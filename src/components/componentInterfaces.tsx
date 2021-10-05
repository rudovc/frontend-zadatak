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

export interface ArticleProp {
  articles: Article[];
}

export interface CategoryList {
  general: ArticleProp;
  business: ArticleProp;
  entertainment: ArticleProp;
  health: ArticleProp;
  science: ArticleProp;
  sports: ArticleProp;
  technology: ArticleProp;
}

export interface HomepageProps {
  data: CategoryList;
}
