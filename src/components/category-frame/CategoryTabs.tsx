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
const isActive = (
  activeTab: number | undefined,
  thisTab: CategoryTab
): boolean => {
  // Tek sad san skuzia da postoje puno normalniji nacini za ovo rijesit
  if (activeTab === thisTab) {
    return true;
  } else {
    return false;
  }
};

export const CategoryTabs = (props: TabProps) => {
  const activeTab = props.value;
  const handleClick = (category: CategoryTab) => {
    if (typeof props.onClick !== "undefined") {
      props.onClick<CategoryTab>(category);
    }
  };

  const tabBackground = isMobileOnly
    ? `${styles.categorytabbackground} ${styles.mobile}`
    : `${styles.categorytabbackground}`;

  const tabStyle = isMobileOnly
    ? `${styles.categorytab} ${styles.mobile}`
    : `${styles.categorytab}`;

  const iconStyle = isMobileOnly
    ? styles.categorytabiconmobile
    : styles.categorytabicon;

  const customIconStyle = isMobileOnly
    ? styles.customiconmobile
    : styles.customicon;

  return (
    <div className={props.className}>
      <div
        className={
          isActive(activeTab, CategoryTab.Home)
            ? `${tabBackground} ${styles.active}`
            : `${tabBackground}`
        }
      >
        <ButtonBase
          className={styles.categorytabbutton}
          onClick={() => {
            handleClick(CategoryTab.Home);
          }}
        >
          <div
            className={
              isActive(activeTab, CategoryTab.Home)
                ? `${tabStyle} ${styles.active}`
                : `${tabStyle}`
            }
          >
            <HomeIcon className={iconStyle} />
            <span>Home</span>
          </div>
        </ButtonBase>
      </div>
      <div
        className={
          isActive(activeTab, CategoryTab.General)
            ? `${tabBackground} ${styles.active}`
            : `${tabBackground}`
        }
      >
        <ButtonBase
          className={styles.categorytabbutton}
          onClick={() => {
            handleClick(CategoryTab.General);
          }}
        >
          <div
            className={
              isActive(activeTab, CategoryTab.General)
                ? `${tabStyle} ${styles.active}`
                : `${tabStyle}`
            }
          >
            <GeneralIcon className={customIconStyle} />
            <span>General</span>
          </div>
        </ButtonBase>
      </div>
      <div
        className={
          isActive(activeTab, CategoryTab.Business)
            ? `${tabBackground} ${styles.active}`
            : `${tabBackground}`
        }
      >
        <ButtonBase
          className={styles.categorytabbutton}
          onClick={() => {
            handleClick(CategoryTab.Business);
          }}
        >
          <div
            className={
              isActive(activeTab, CategoryTab.Business)
                ? `${tabStyle} ${styles.active}`
                : `${tabStyle}`
            }
          >
            <WorkIcon className={iconStyle} />
            <span>Business</span>
          </div>
        </ButtonBase>
      </div>
      <div
        className={
          isActive(activeTab, CategoryTab.Health)
            ? `${tabBackground} ${styles.active}`
            : `${tabBackground}`
        }
      >
        <ButtonBase
          className={styles.categorytabbutton}
          onClick={() => {
            handleClick(CategoryTab.Health);
          }}
        >
          <div
            className={
              isActive(activeTab, CategoryTab.Health)
                ? `${tabStyle} ${styles.active}`
                : `${tabStyle}`
            }
          >
            <LocalHospitalicon className={iconStyle} />
            <span>Health</span>
          </div>
        </ButtonBase>
      </div>
      <div
        className={
          isActive(activeTab, CategoryTab.Science)
            ? `${tabBackground} ${styles.active}`
            : `${tabBackground}`
        }
      >
        <ButtonBase
          className={styles.categorytabbutton}
          onClick={() => {
            handleClick(CategoryTab.Science);
          }}
        >
          <div
            className={
              isActive(activeTab, CategoryTab.Science)
                ? `${tabStyle} ${styles.active}`
                : `${tabStyle}`
            }
          >
            <ScienceIcon className={iconStyle} />
            <span>Science</span>
          </div>
        </ButtonBase>
      </div>
      <div
        className={
          isActive(activeTab, CategoryTab.Sports)
            ? `${tabBackground} ${styles.active}`
            : `${tabBackground}`
        }
      >
        <ButtonBase
          className={styles.categorytabbutton}
          onClick={() => {
            handleClick(CategoryTab.Sports);
          }}
        >
          <div
            className={
              isActive(activeTab, CategoryTab.Sports)
                ? `${tabStyle} ${styles.active}`
                : `${tabStyle}`
            }
          >
            <SportsSoccerIcon className={iconStyle} />
            <span>Sports</span>
          </div>
        </ButtonBase>
      </div>
      <div
        className={
          isActive(activeTab, CategoryTab.Technology)
            ? `${tabBackground} ${styles.active}`
            : `${tabBackground}`
        }
      >
        <ButtonBase
          className={styles.categorytabbutton}
          onClick={() => {
            handleClick(CategoryTab.Technology);
          }}
        >
          <div
            className={
              isActive(activeTab, CategoryTab.Technology)
                ? `${tabStyle} ${styles.active}`
                : `${tabStyle}`
            }
          >
            <MonitorIcon className={iconStyle} />
            <span>Technology</span>
          </div>
        </ButtonBase>
      </div>
    </div>
  );
};
