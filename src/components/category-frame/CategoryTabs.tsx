import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import LocalHospitalicon from "@mui/icons-material/LocalHospital";
import ScienceIcon from "@mui/icons-material/Science";
import MonitorIcon from "@mui/icons-material/Monitor";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import ButtonBase from "@mui/material/Button";
import { CategoryTab } from "../tab-enums";
import { TabProps } from "../../interfaces/component-interfaces";
import styles from "./styles/categorytabs.module.scss";

export const CategoryTabs = (props: TabProps) => {
  const activeTab = props.value;

  const handleClick = (category: CategoryTab) => {
    if (typeof props.onClick !== "undefined") {
      props.onClick<CategoryTab>(category);
    }
  };

  // Return active tab style only if this tab is active
  const isActiveTabStyle = (thisTab: CategoryTab): string[] => {
    if (activeTab === thisTab) {
      return [styles.categorytabbackgroundactive, styles.categorytabactive];
    } else {
      return [styles.categorytabbackgroundinactive, styles.categorytabinactive];
    }
  };

  return (
    <div className={props.className}>
      <div className={isActiveTabStyle(CategoryTab.Home)[0]}>
        <ButtonBase
          className={styles.categorytabbutton}
          onClick={() => {
            handleClick(CategoryTab.Home);
          }}
        >
          <div className={isActiveTabStyle(CategoryTab.Home)[1]}>
            <HomeIcon className={styles.categorytabicon} />
            <span>Home</span>
          </div>
        </ButtonBase>
      </div>
      <div className={isActiveTabStyle(CategoryTab.General)[0]}>
        <ButtonBase
          className={styles.categorytabbutton}
          onClick={() => {
            handleClick(CategoryTab.General);
          }}
        >
          <div className={isActiveTabStyle(CategoryTab.General)[1]}>
            TODO:ICON
            <span>General</span>
          </div>
        </ButtonBase>
      </div>
      <div className={isActiveTabStyle(CategoryTab.Business)[0]}>
        <ButtonBase
          className={styles.categorytabbutton}
          onClick={() => {
            handleClick(CategoryTab.Business);
          }}
        >
          <div className={isActiveTabStyle(CategoryTab.Business)[1]}>
            <WorkIcon className={styles.categorytabicon} />
            <span>Business</span>
          </div>
        </ButtonBase>
      </div>
      <div className={isActiveTabStyle(CategoryTab.Health)[0]}>
        <ButtonBase
          className={styles.categorytabbutton}
          onClick={() => {
            handleClick(CategoryTab.Health);
          }}
        >
          <div className={isActiveTabStyle(CategoryTab.Health)[1]}>
            <LocalHospitalicon className={styles.categorytabicon} />
            <span>Health</span>
          </div>
        </ButtonBase>
      </div>
      <div className={isActiveTabStyle(CategoryTab.Science)[0]}>
        <ButtonBase
          className={styles.categorytabbutton}
          onClick={() => {
            handleClick(CategoryTab.Science);
          }}
        >
          <div className={isActiveTabStyle(CategoryTab.Science)[1]}>
            <ScienceIcon className={styles.categorytabicon} />
            <span>Science</span>
          </div>
        </ButtonBase>
      </div>
      <div className={isActiveTabStyle(CategoryTab.Sports)[0]}>
        <ButtonBase
          className={styles.categorytabbutton}
          onClick={() => {
            handleClick(CategoryTab.Sports);
          }}
        >
          <div className={isActiveTabStyle(CategoryTab.Sports)[1]}>
            <SportsSoccerIcon className={styles.categorytabicon} />
            <span>Sports</span>
          </div>
        </ButtonBase>
      </div>
      <div className={isActiveTabStyle(CategoryTab.Technology)[0]}>
        <ButtonBase
          className={styles.categorytabbutton}
          onClick={() => {
            handleClick(CategoryTab.Technology);
          }}
        >
          <div className={isActiveTabStyle(CategoryTab.Technology)[1]}>
            <MonitorIcon className={styles.categorytabicon} />
            <span>Technology</span>
          </div>
        </ButtonBase>
      </div>
    </div>
  );
};
