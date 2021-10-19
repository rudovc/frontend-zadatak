import { Article } from "./data-interfaces";
import { SidebarTab } from "../components/tab-enums";

export interface CategoryFrameState {
  articles: Article[];
}

export interface SidebarState {
  favorites: string[];
  activeTab: SidebarTab;
}
