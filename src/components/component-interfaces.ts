import { Article } from "../data-interfaces";

export interface HomepageProps extends IProps {
  categoryArticles: Article[];
  sidebarArticles: Article[];
}

export interface IProps {
  className?: string;
  key?: string;
}
