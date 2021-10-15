import { useState } from "react";
import { IProps } from "./component-interfaces";
import Button from "@mui/material/Button";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import styles from "./banner.module.scss";

export const Banner = (props: IProps): JSX.Element => {
  // Pametniji nacin za pratit ovo?
  const isRejectedStorage =
    localStorage.getItem("isRejected") === null
      ? "false"
      : localStorage.getItem("isRejected");

  const [isRejected, setIsRejected] = useState(
    isRejectedStorage === "false" ? false : true
  );

  const handleClick = () => {
    localStorage.setItem("isRejected", "true");
    setIsRejected(true);
  };

  if (isRejected) {
    return <div></div>;
  } else {
    return (
      <div className={styles.homepagebar}>
        <div className={styles.homepagebartext}>
          <Typography
            variant="h5"
            style={{ color: "#ffffff", fontWeight: "bold" }}
          >
            Make MyNews your homepage
          </Typography>
          <Typography
            variant="h5"
            style={{ color: "#ffffff", fontWeight: 100 }}
          >
            Every day discover what's trending on the internet!
          </Typography>
        </div>
        <div className={styles.homepagebuttons}>
          {/*Kako napravit da ustvari bude homepage?*/}
          <Button className={styles.getbutton} variant="contained">
            GET
          </Button>
          {/* Kako sredit hover tu a da zadrzin animaciju */}
          <ButtonBase className={styles.nothanksbutton} onClick={handleClick}>
            No, thanks
          </ButtonBase>
        </div>
      </div>
    );
  }
};
