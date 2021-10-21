import { TabProps } from "../interfaces/component-interfaces";
import { MobileTab } from "./tab-enums";
import styles from "./styles/mobiletabs.module.scss";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";

const getActiveTabStyle = (
  thisTab: MobileTab | undefined,
  activeTab: MobileTab | undefined
): string[] => {
  if (activeTab === thisTab) {
    return [styles.buttonactive, styles.buttonbackgroundactive];
  } else {
    return [styles.buttoninactive, styles.buttonbackgroundinactive];
  }
};

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
        className={getActiveTabStyle(activeTab, MobileTab.Featured)[1]}
      >
        <div className={getActiveTabStyle(activeTab, MobileTab.Featured)[0]}>
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
        className={getActiveTabStyle(activeTab, MobileTab.Latest)[1]}
      >
        <div className={getActiveTabStyle(activeTab, MobileTab.Latest)[0]}>
          <Typography style={{ fontWeight: 500 }}>Latest</Typography>
        </div>
      </ButtonBase>
    </div>
  );
};
