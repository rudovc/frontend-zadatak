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

  const handleCategoryTabChange = (arg: CategoryTab) => {
    if (typeof props.onCategoryTabChange !== "undefined") {
      props.onCategoryTabChange(arg);
    }
  };

  const ContentSelectedByTab = (): JSX.Element => {
    if (activeMobileTab === MobileTab.Featured) {
      return (
        <CategoryFrame
          className={styles.categoryframemobile}
          articles={props.categoryArticles}
          nameFilter={nameFilter}
          onCategoryTabChange={handleCategoryTabChange}
          categoryTab={props.categoryTab}
        />
      );
    } else {
      return <Sidebar className={styles.sidebarmobile} />;
    }
  };

  if (isMobileOnly) {
    return (
      <div className={props.className}>
        <TitleBar
          className={styles.titlebarmobile}
          categoryTab={props.categoryTab}
          onCategoryTabChange={handleCategoryTabChange}
        />
        <MobileTabs
          value={activeMobileTab}
          onClick={<T extends unknown>(arg: T) => {
            setActiveMobileTab(arg as unknown as MobileTab);
          }}
          className={styles.tabsmobile}
        />
        <div className={styles.mainframemobile}>
          <ContentSelectedByTab />
        </div>
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
