import { MobileTab } from "./tab-enums";
import { Article } from "../data-interfaces";

export interface HomepageProps extends IProps {
  categoryArticles: Article[];
  sidebarArticles: Article[];
}

export interface MobileTabProps extends IProps {
  onClick: (arg: MobileTab) => void;
  value?: number;
}

export interface IProps {
  className?: string;
  key?: string;
}
