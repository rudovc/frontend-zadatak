import { useState } from "react";
import { CategoryFrame } from "./CategoryFrame";
import { Sidebar } from "./Sidebar";
import { Banner } from "./Banner";
import { HomepageProps } from "../interfaces/component-interfaces";
import Divider from "@mui/material/Divider";
import styles from "./styles/homepage.module.scss";
import { useAppSelector } from "../hooks";
import { selectNameFilter } from "./slices/homepage-slice";
import { isMobileOnly } from "react-device-detect";
import { TitleBar } from "./TitleBar";
import { MobileTab, CategoryTab } from "./tab-enums";
import { MobileTabs } from "./MobileTabs";

export const Homepage = (props: HomepageProps): JSX.Element => {
  const nameFilter = useAppSelector(selectNameFilter);
  const [activeMobileTab, setActiveMobileTab] = useState(MobileTab.Featured);

  // Nesto san ja tu zeznia,
  // tj ocito ne kuzin kako funkcionira,
  // tj koristin na krivi nacin...
  // Zasad "radi" ali nemam pojma zasto i kako mora bit ovako?
  // Tia san postic da ne moran radit 3 razlicita interfacea za SidebarTabs, MobileTabs i CategoryTabs
  const handleMobileTabClick = <T extends unknown>(arg: T) => {
    setActiveMobileTab(arg as unknown as MobileTab);
  };

  const handleCategoryTabChange = (arg: CategoryTab) => {
    if (typeof props.onCategoryTabChange !== "undefined") {
      props.onCategoryTabChange(arg);
    }
  };

  const displayContentByTab = (): JSX.Element => {
    if (activeMobileTab === MobileTab.Featured) {
      return (
        // Proba san koristit media querije ali da san bia pametniji pocea bi tako od pocetka, ovako nije ni blizu elegantno
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
          value={activeMobileTab}
          onClick={handleMobileTabClick}
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
            onCategoryTabChange={handleCategoryTabChange}
            categoryTab={props.categoryTab}
          />
        </div>
      </div>
    );
  }
};
