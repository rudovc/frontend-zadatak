import { Article } from "./componentInterfaces";
import { SidebarTab } from "./tabEnums";

export interface CategoryFrameState {
  articles: Article[];
}

export interface SidebarState {
  favorites: string[];
  activeTab: SidebarTab;
}
