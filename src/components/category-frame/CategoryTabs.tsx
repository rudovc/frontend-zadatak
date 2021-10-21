import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import LocalHospitalicon from "@mui/icons-material/LocalHospital";
import ScienceIcon from "@mui/icons-material/Science";
import MonitorIcon from "@mui/icons-material/Monitor";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import ButtonBase from "@mui/material/Button";
import { mdiNewspaperVariantOutline } from "@mdi/js";
import { CategoryTab } from "../tab-enums";
import { IProps, TabProps } from "../../interfaces/component-interfaces";
import { isMobileOnly } from "react-device-detect";
import styles from "./styles/categorytabs.module.scss";

const GeneralIcon = (props: IProps) => {
  return (
    <svg {...props} viewBox="0 0 24 24">
      <path d={mdiNewspaperVariantOutline}></path>
    </svg>
  );
};

// Return active tab style only if tab is active
const getTabStyle = (
  activeTab: number | undefined,
  thisTab: CategoryTab
): string[] => {
  // Tek sad san skuzia da postoji puno normalniji nacin za ovo rijesit,
  // da napravin route koji u url doda npr #${tabname}
  // dodan u tab id="tabname" i onda samo koristin css :target
  if (activeTab === thisTab) {
    if (isMobileOnly) {
      return [
        styles.categorytabbackgroundactivemobile,
        styles.categorytabactivemobile,
      ];
    } else {
      return [styles.categorytabbackgroundactive, styles.categorytabactive];
    }
  } else {
    if (isMobileOnly) {
      return [
        styles.categorytabbackgroundinactivemobile,
        styles.categorytabinactivemobile,
      ];
    } else {
      return [styles.categorytabbackgroundinactive, styles.categorytabinactive];
    }
  }
};

export const CategoryTabs = (props: TabProps) => {
  const activeTab = props.value;
  const handleClick = (category: CategoryTab) => {
    if (typeof props.onClick !== "undefined") {
      props.onClick<CategoryTab>(category);
    }
  };

  const iconStyle = isMobileOnly
    ? styles.categorytabiconmobile
    : styles.categorytabicon;

  const customIconStyle = isMobileOnly
    ? styles.customiconmobile
    : styles.customicon;

  return (
    <div className={props.className}>
      <div className={getTabStyle(activeTab, CategoryTab.Home)[0]}>
        <ButtonBase
          className={styles.categorytabbutton}
          onClick={() => {
            handleClick(CategoryTab.Home);
          }}
        >
          <div className={getTabStyle(activeTab, CategoryTab.Home)[1]}>
            <HomeIcon className={iconStyle} />
            <span>Home</span>
          </div>
        </ButtonBase>
      </div>
      <div className={getTabStyle(activeTab, CategoryTab.General)[0]}>
        <ButtonBase
          className={styles.categorytabbutton}
          onClick={() => {
            handleClick(CategoryTab.General);
          }}
        >
          <div className={getTabStyle(activeTab, CategoryTab.General)[1]}>
            <GeneralIcon className={customIconStyle} />
            <span>General</span>
          </div>
        </ButtonBase>
      </div>
      <div className={getTabStyle(activeTab, CategoryTab.Business)[0]}>
        <ButtonBase
          className={styles.categorytabbutton}
          onClick={() => {
            handleClick(CategoryTab.Business);
          }}
        >
          <div className={getTabStyle(activeTab, CategoryTab.Business)[1]}>
            <WorkIcon className={iconStyle} />
            <span>Business</span>
          </div>
        </ButtonBase>
      </div>
      <div className={getTabStyle(activeTab, CategoryTab.Health)[0]}>
        <ButtonBase
          className={styles.categorytabbutton}
          onClick={() => {
            handleClick(CategoryTab.Health);
          }}
        >
          <div className={getTabStyle(activeTab, CategoryTab.Health)[1]}>
            <LocalHospitalicon className={iconStyle} />
            <span>Health</span>
          </div>
        </ButtonBase>
      </div>
      <div className={getTabStyle(activeTab, CategoryTab.Science)[0]}>
        <ButtonBase
          className={styles.categorytabbutton}
          onClick={() => {
            handleClick(CategoryTab.Science);
          }}
        >
          <div className={getTabStyle(activeTab, CategoryTab.Science)[1]}>
            <ScienceIcon className={iconStyle} />
            <span>Science</span>
          </div>
        </ButtonBase>
      </div>
      <div className={getTabStyle(activeTab, CategoryTab.Sports)[0]}>
        <ButtonBase
          className={styles.categorytabbutton}
          onClick={() => {
            handleClick(CategoryTab.Sports);
          }}
        >
          <div className={getTabStyle(activeTab, CategoryTab.Sports)[1]}>
            <SportsSoccerIcon className={iconStyle} />
            <span>Sports</span>
          </div>
        </ButtonBase>
      </div>
      <div className={getTabStyle(activeTab, CategoryTab.Technology)[0]}>
        <ButtonBase
          className={styles.categorytabbutton}
          onClick={() => {
            handleClick(CategoryTab.Technology);
          }}
        >
          <div className={getTabStyle(activeTab, CategoryTab.Technology)[1]}>
            <MonitorIcon className={iconStyle} />
            <span>Technology</span>
          </div>
        </ButtonBase>
      </div>
    </div>
  );
};
