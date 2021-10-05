import "./components.scss";
import { ArticleProp } from "./componentInterfaces";
import { SidebarTabs } from "./sidebar/SidebarTabs";
import { SidebarList } from "./sidebar/SidebarList";

export const Sidebar = (props: ArticleProp) => {
  return (
    <div className="sidebar">
      <SidebarTabs />
      <SidebarList articles={props.articles} />
    </div>
  );
};
