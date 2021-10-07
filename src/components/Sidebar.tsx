import "./components.scss";
import { SidebarTabs } from "./sidebar/SidebarTabs";
import { SidebarList } from "./sidebar/SidebarList";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarTabs />
      <SidebarList />
    </div>
  );
};
