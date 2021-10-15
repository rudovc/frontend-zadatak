import { IProps } from "./component-interfaces";
import Typography from "@mui/material/Typography";
import { SearchBar } from "./SearchBar";
import styles from "./titlebar.module.scss";
import { isMobileOnly } from "react-device-detect";

export const TitleBar = (props: IProps): JSX.Element => {
  if (isMobileOnly) {
    return (
      <div className={props.className}>
        <div className={styles.title}>
          <Typography
            variant="h4"
            style={{ color: "#b71c1c", fontSize: "1.5rem" }}
          >
            My
          </Typography>
          <Typography variant="h4" style={{ fontSize: "1.5rem" }}>
            News
          </Typography>
        </div>
        <SearchBar className={styles.searchboxmobile} />
      </div>
    );
  } else {
    return (
      <div className={props.className}>
        <div className={styles.title}>
          <Typography variant="h4" style={{ color: "#b71c1c" }}>
            My
          </Typography>
          <Typography variant="h4">News</Typography>
        </div>
        <SearchBar className={styles.searchbox} />
      </div>
    );
  }
};
