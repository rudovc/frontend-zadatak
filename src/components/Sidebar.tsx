import "./components.scss";
import { ArticlesProp } from "./componentInterfaces";
import { SidebarTabs } from "./sidebar/SidebarTabs";
import { SidebarList } from "./sidebar/SidebarList";

export const Sidebar = (props: ArticlesProp) => {
  return (
    <div className="sidebar">
      <SidebarTabs />
      <SidebarList articles={props.articles} />
    </div>
  );
};
