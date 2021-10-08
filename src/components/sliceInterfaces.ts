import { Article } from "./componentInterfaces";
import { SidebarTab } from "./tabEnums";

export interface CategoryFrameState {
  articles: Article[];
}

export interface SidebarState {
  articles: Article[];
  favorites: Article[];
  activeTab: SidebarTab;
}
