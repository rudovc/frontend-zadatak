import { SidebarTabs } from "./sidebar/SidebarTabs";
import { SidebarList } from "./sidebar/SidebarList";
import { IProps } from "../interfaces/component-interfaces";
import { isMobileOnly } from "react-device-detect";
import styles from "./styles/sidebar.module.scss";
import { SidebarTab } from "./tab-enums";
import { useState } from "react";

export const Sidebar = (props: IProps): JSX.Element => {
  const [activeTab, setActiveTab] = useState(SidebarTab.Latest);

  const handleSidebarTabChange = <T extends unknown>(newTab: T) => {
    setActiveTab(newTab as unknown as SidebarTab);
  };

  if (isMobileOnly) {
    return (
      <div className={props.className}>
        <SidebarTabs
          className={styles.sidebartabs}
          onClick={handleSidebarTabChange}
          value={activeTab}
        />
        <SidebarList
          className={styles.sidebarlistcontainer}
          activeTab={activeTab}
        />
      </div>
    );
  } else {
    return (
      <div className={props.className}>
        <SidebarTabs
          className={styles.sidebartabs}
          onClick={handleSidebarTabChange}
          value={activeTab}
        />
        <SidebarList
          className={styles.sidebarlistcontainer}
          activeTab={activeTab}
        />
      </div>
    );
  }
};
