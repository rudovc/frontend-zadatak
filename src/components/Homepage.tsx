import { useState } from "react";
import { CategoryFrame } from "./CategoryFrame";
import { Sidebar } from "./Sidebar";
import { Banner } from "./Banner";
import { HomepageProps } from "./component-interfaces";
import Divider from "@mui/material/Divider";
import styles from "./homepage.module.scss";
import { useAppSelector } from "../hooks";
import { selectNameFilter } from "./homepage-slice";
import { isMobileOnly } from "react-device-detect";
import { TitleBar } from "./TitleBar";
import { MobileTab } from "./tab-enums";
import { MobileTabs } from "./MobileTabs";

export const Homepage = (props: HomepageProps): JSX.Element => {
  // Da san ovo pocea sad vjerojatno bi moga napravit i bez ovolikog koristenja material uija...

  const nameFilter = useAppSelector(selectNameFilter);
  const [activeTab, setActiveTab] = useState(MobileTab.Featured);

  const handleClick = (arg: MobileTab) => {
    setActiveTab(arg);
  };

  const displayContentByTab = (): JSX.Element => {
    if (activeTab === MobileTab.Featured) {
      return (
        // Proba san koristit media querije ali da san bia pametniji pocea bi tako od pocetka pa ne bi mora hakirat pola
        <CategoryFrame
          className={styles.categoryframemobile}
          articles={props.categoryArticles}
          nameFilter={nameFilter}
        />
      );
    } else {
      return <Sidebar className={styles.sidebarmobile} />;
    }
  };

  if (isMobileOnly) {
    return (
      <div className={props.className}>
        <TitleBar className={styles.titlebarmobile} />
        <MobileTabs
          value={activeTab}
          onClick={handleClick}
          className={styles.tabsmobile}
        />
        <div className={styles.mainframemobile}>{displayContentByTab()}</div>
      </div>
    );
  } else {
    return (
      <div className={props.className}>
        <Banner />
        <div className={styles.mainframe}>
          <TitleBar className={styles.titlebar} />
          <Divider orientation="horizontal" flexItem />
          <CategoryFrame
            className={styles.categoryframe}
            articles={props.categoryArticles}
            nameFilter={nameFilter}
          />
        </div>
      </div>
    );
  }
};
