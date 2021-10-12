import { Article } from "./component-interfaces";
import { SidebarTab } from "./tab-enums";

export interface CategoryFrameState {
  articles: Article[];
}

export interface SidebarState {
  favorites: string[];
  activeTab: SidebarTab;
}
