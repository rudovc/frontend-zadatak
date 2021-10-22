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
        className={`${tabBackground} ${
          activeTab === CategoryTab.Home ? styles.active : ""
        }`}
      >
        <ButtonBase
          className={styles.categorytabbutton}
          onClick={() => {
            handleClick(CategoryTab.Home);
          }}
        >
          <div
            className={`${tabStyle} ${
              activeTab === CategoryTab.Home ? styles.active : ""
            }`}
          >
            <HomeIcon className={iconStyle} />
            <span>Home</span>
          </div>
        </ButtonBase>
      </div>
      <div
        className={`${tabBackground} ${
          activeTab === CategoryTab.General ? styles.active : ""
        }`}
      >
        <ButtonBase
          className={styles.categorytabbutton}
          onClick={() => {
            handleClick(CategoryTab.General);
          }}
        >
          <div
            className={`${tabStyle} ${
              activeTab === CategoryTab.General ? styles.active : ""
            }`}
          >
            <GeneralIcon className={customIconStyle} />
            <span>General</span>
          </div>
        </ButtonBase>
      </div>
      <div
        className={`${tabBackground} ${
          activeTab === CategoryTab.Business ? styles.active : ""
        }`}
      >
        <ButtonBase
          className={styles.categorytabbutton}
          onClick={() => {
            handleClick(CategoryTab.Business);
          }}
        >
          <div
            className={`${tabStyle} ${
              activeTab === CategoryTab.Business ? styles.active : ""
            }`}
          >
            <WorkIcon className={iconStyle} />
            <span>Business</span>
          </div>
        </ButtonBase>
      </div>
      <div
        className={`${tabBackground} ${
          activeTab === CategoryTab.Health ? styles.active : ""
        }`}
      >
        <ButtonBase
          className={styles.categorytabbutton}
          onClick={() => {
            handleClick(CategoryTab.Health);
          }}
        >
          <div
            className={`${tabStyle} ${
              activeTab === CategoryTab.Health ? styles.active : ""
            }`}
          >
            <LocalHospitalicon className={iconStyle} />
            <span>Health</span>
          </div>
        </ButtonBase>
      </div>
      <div
        className={`${tabBackground} ${
          activeTab === CategoryTab.Science ? styles.active : ""
        }`}
      >
        <ButtonBase
          className={styles.categorytabbutton}
          onClick={() => {
            handleClick(CategoryTab.Science);
          }}
        >
          <div
            className={`${tabStyle} ${
              activeTab === CategoryTab.Science ? styles.active : ""
            }`}
          >
            <ScienceIcon className={iconStyle} />
            <span>Science</span>
          </div>
        </ButtonBase>
      </div>
      <div
        className={`${tabBackground} ${
          activeTab === CategoryTab.Sports ? styles.active : ""
        }`}
      >
        <ButtonBase
          className={styles.categorytabbutton}
          onClick={() => {
            handleClick(CategoryTab.Sports);
          }}
        >
          <div
            className={`${tabStyle} ${
              activeTab === CategoryTab.Sports ? styles.active : ""
            }`}
          >
            <SportsSoccerIcon className={iconStyle} />
            <span>Sports</span>
          </div>
        </ButtonBase>
      </div>
      <div
        className={`${tabBackground} ${
          activeTab === CategoryTab.Technology ? styles.active : ""
        }`}
      >
        <ButtonBase
          className={styles.categorytabbutton}
          onClick={() => {
            handleClick(CategoryTab.Technology);
          }}
        >
          <div
            className={`${tabStyle} ${
              activeTab === CategoryTab.Technology ? styles.active : ""
            }`}
          >
            <MonitorIcon className={iconStyle} />
            <span>Technology</span>
          </div>
        </ButtonBase>
      </div>
    </div>
  );
};
