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

  // Ne radi velicina
  const GeneralIcon = (props: IProps) => {
    return (
      <svg {...props} viewBox="0 0 24 24">
        <path d={mdiNewspaperVariantOutline}></path>
      </svg>
    );
  };

  // Return active tab style only if this tab is active
  const isActiveTabStyle = (thisTab: CategoryTab): string[] => {
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
        return [
          styles.categorytabbackgroundinactive,
          styles.categorytabinactive,
        ];
      }
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
            <HomeIcon className={iconStyle} />
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
            <GeneralIcon className={customIconStyle} />
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
            <WorkIcon className={iconStyle} />
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
            <LocalHospitalicon className={iconStyle} />
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
            <ScienceIcon className={iconStyle} />
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
            <SportsSoccerIcon className={iconStyle} />
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
            <MonitorIcon className={iconStyle} />
            <span>Technology</span>
          </div>
        </ButtonBase>
      </div>
    </div>
  );
};
