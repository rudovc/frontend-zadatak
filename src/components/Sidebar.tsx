import { SidebarTabs } from "./sidebar/SidebarTabs";
import { SidebarList } from "./sidebar/SidebarList";
import { IProps } from "./component-interfaces";
import { isMobileOnly } from "react-device-detect";
import styles from "./sidebar.module.scss";

export const Sidebar = (props: IProps): JSX.Element => {
  if (isMobileOnly) {
    return (
      <div className={props.className}>
        <SidebarTabs className={styles.sidebartabs} />
        <SidebarList className={styles.sidebarlistcontainer} />
      </div>
    );
  } else {
    return (
      <div className={props.className}>
        <SidebarTabs className={styles.sidebartabs} />
        <SidebarList className={styles.sidebarlistcontainer} />
      </div>
    );
  }
};
