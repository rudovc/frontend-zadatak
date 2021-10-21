import { CategoryTab, SidebarTab } from "../components/tab-enums";
import { Article } from "../interfaces/data-interfaces";

export interface IProps {
  className?: string;
  key?: string;
}
export interface HomepageProps extends IProps {
  onCategoryTabChange?: (arg: CategoryTab) => void;
  categoryTab: CategoryTab;
  categoryArticles: Article[];
  sidebarArticles: Article[];
}

export interface ArticlePreviewProps extends IProps {
  article: Article;
  onCategoryClick?: (arg: CategoryTab) => void;
}

export interface ArticleGridProps extends IProps {
  articles: Article[];
  onCategoryClick?: (arg: CategoryTab) => void;
}

export interface TabProps extends IProps {
  onClick?: <T>(arg: T) => void;
  value: number;
}

export interface CategoryFrameProps extends IProps {
  onCategoryTabChange?: (arg: CategoryTab) => void;
  categoryTab: CategoryTab;
  articles: Article[];
  nameFilter: string;
}

export interface SidebarListProps extends IProps {
  activeTab: SidebarTab;
}

export interface TitleProps extends IProps {
  titleSize?: "large" | "regular";
}

export interface TitleBarProps extends IProps {
  categoryTab?: CategoryTab;
  onCategoryTabChange?: (arg: CategoryTab) => void;
}

export interface MenuModalProps extends IProps {
  onClose: () => void;
  categoryTab: CategoryTab;
  onCategoryTabChange?: (arg: CategoryTab) => void;
}
