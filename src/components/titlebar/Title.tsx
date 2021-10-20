import { TitleProps } from "../../interfaces/component-interfaces";
import { isMobileOnly } from "react-device-detect";
import Typography from "@mui/material/Typography";

export const Title = (props: TitleProps): JSX.Element => {
  const titleSize =
    typeof props.titleSize === "undefined" ? "regular" : props.titleSize;

  const fontSize = titleSize === "regular" ? "1.5rem" : "2rem";

  if (isMobileOnly) {
    return (
      <div className={props.className}>
        <Typography
          variant="h4"
          style={{
            color: "#b71c1c",
            fontSize: fontSize,
          }}
        >
          My
        </Typography>
        <Typography variant="h4" style={{ fontSize: fontSize }}>
          News
        </Typography>
      </div>
    );
  } else {
    return (
      <div className={props.className}>
        <Typography variant="h4" style={{ color: "#b71c1c" }}>
          My
        </Typography>
        <Typography variant="h4">News</Typography>
      </div>
    );
  }
};
