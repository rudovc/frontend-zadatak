import { useState } from "react";
import { CategoryFrame } from "./CategoryFrame";
import { Sidebar } from "./Sidebar";
import { Banner } from "./Banner";
import { HomepageProps } from "./component-interfaces";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import styles from "./homepage.module.scss";
import { useAppSelector } from "../hooks";
import { selectNameFilter } from "./homepage-slice";
import { isMobileOnly } from "react-device-detect";
import { TitleBar } from "./TitleBar";
import { MobileTab } from "./tab-enums";
import { MobileTabs } from "./MobileTabs";

export const Homepage = (props: HomepageProps): JSX.Element => {
  const nameFilter = useAppSelector(selectNameFilter);
  const [activeTab, setActiveTab] = useState(MobileTab.Featured);

  const handleClick = (arg: MobileTab) => {
    setActiveTab(arg);
  };

  const displayContentByTab = (): JSX.Element => {
    if (activeTab === MobileTab.Featured) {
      return (
        /*Proba san koristit media querije ali da san bia pametniji pocea bi tako od pocetka pa ne bi mora hakirat pola*/
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
        <Container>
          <TitleBar className={styles.titlebarmobile} />
          <MobileTabs
            value={activeTab}
            onClick={handleClick}
            className={styles.tabsmobile}
          />
          <Stack direction="row" spacing={2} className={styles.mainframe}>
            {displayContentByTab()}
          </Stack>
        </Container>
      </div>
    );
  } else {
    return (
      <div className={props.className}>
        <Banner />
        <Container>
          <TitleBar className={styles.titlebar} />
          <Stack
            spacing={3}
            divider={<Divider orientation="horizontal" flexItem />}
          >
            <Stack direction="row" spacing={2} className={styles.mainframe}>
              <CategoryFrame
                className={styles.categoryframe}
                articles={props.categoryArticles}
                nameFilter={nameFilter}
              />
              <Sidebar className={styles.sidebar} />
            </Stack>
          </Stack>
        </Container>
      </div>
    );
  }
};
