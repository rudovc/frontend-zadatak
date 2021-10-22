import { TabProps } from "../interfaces/component-interfaces";
import { MobileTab } from "./tab-enums";
import styles from "./styles/mobiletabs.module.scss";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";

export const MobileTabs = (props: TabProps): JSX.Element => {
  const activeTab = props.value;

  const handleClick = (newTab: MobileTab) => {
    if (typeof props.onClick !== "undefined") {
      props.onClick(newTab);
    }
  };

  return (
    <div className={props.className}>
      <ButtonBase
        onClick={() => handleClick(MobileTab.Featured)}
        className={`${styles.buttonbackground} ${
          activeTab === MobileTab.Featured ? styles.active : ""
        }`}
      >
        <div
          className={`${styles.button} ${
            activeTab === MobileTab.Featured ? styles.active : ""
          }`}
        >
          <Typography
            style={{
              fontWeight: 500,
            }}
          >
            Featured
          </Typography>
        </div>
      </ButtonBase>
      <ButtonBase
        onClick={() => handleClick(MobileTab.Latest)}
        className={`${styles.buttonbackground} ${
          activeTab === MobileTab.Latest ? styles.active : ""
        }`}
      >
        <div
          className={`${styles.button} ${
            activeTab === MobileTab.Latest ? styles.active : ""
          }`}
        >
          <Typography style={{ fontWeight: 500 }}>Latest</Typography>
        </div>
      </ButtonBase>
    </div>
  );
};
