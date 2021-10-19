import { TabProps } from "../interfaces/component-interfaces";
import { MobileTab } from "./tab-enums";
import styles from "./styles/mobiletabs.module.scss";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";

export const MobileTabs = (props: TabProps): JSX.Element => {
  const isActiveTabStyle = (thisTab: MobileTab): string[] => {
    if (props.value === thisTab) {
      return [styles.buttonactive, styles.buttonbackgroundactive];
    } else {
      return [styles.buttoninactive, styles.buttonbackgroundinactive];
    }
  };

  const handleClick = (newTab: MobileTab) => {
    if (typeof props.onClick !== "undefined") {
      props.onClick(newTab);
    }
  };

  return (
    <div className={props.className}>
      <ButtonBase
        onClick={() => handleClick(MobileTab.Featured)}
        className={isActiveTabStyle(MobileTab.Featured)[1]}
      >
        <div className={isActiveTabStyle(MobileTab.Featured)[0]}>
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
        className={isActiveTabStyle(MobileTab.Latest)[1]}
      >
        <div className={isActiveTabStyle(MobileTab.Latest)[0]}>
          <Typography style={{ fontWeight: 500 }}>Latest</Typography>
        </div>
      </ButtonBase>
    </div>
  );
};
