import { SidebarTabs } from "./sidebar/SidebarTabs";
import { SidebarList } from "./sidebar/SidebarList";
import styles from "./sidebar.module.scss";

export const Sidebar = (props: { className?: string }): JSX.Element => {
  return (
    <div className={props.className}>
      <SidebarTabs className={styles.sidebartabs} />
      <SidebarList className={styles.sidebarlistcontainer} />
    </div>
  );
};
