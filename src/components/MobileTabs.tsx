import { MobileTabProps } from "./component-interfaces";
import { MobileTab } from "./tab-enums";
import styles from "./mobiletabs.module.scss";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";

export const MobileTabs = (props: MobileTabProps): JSX.Element => {
  const isActiveTabStyle = (thisTab: MobileTab): string => {
    if (props.value === thisTab) {
      return styles.buttonactive;
    } else {
      return styles.buttoninactive;
    }
  };

  const handleClick = (newTab: MobileTab) => {
    props.onClick(newTab);
  };

  return (
    <div className={props.className}>
      <div className={isActiveTabStyle(MobileTab.Featured)}>
        <ButtonBase onClick={() => handleClick(MobileTab.Featured)}>
          <Typography style={{ fontWeight: 500 }}>Featured</Typography>
        </ButtonBase>
      </div>
      <div className={isActiveTabStyle(MobileTab.Latest)}>
        <ButtonBase onClick={() => handleClick(MobileTab.Latest)}>
          <Typography style={{ fontWeight: 500 }}>Latest</Typography>
        </ButtonBase>
      </div>
    </div>
  );
};
