import { Article } from "../../../data-interfaces";
import Paper from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import styles from "./sidebararticlepreview.module.scss";

export const SidebarArticlePreview = (props: Article): JSX.Element => {
  const date = new Date(props.publishedAt);

  const formatDate = (): string => {
    const timeFormat = new Intl.RelativeTimeFormat("en-gb");
    // Format article date to show only HH:MM
    const now = new Date();
    const day =
      date.getDay() !== now.getDay()
        ? // Show Day before HH:MM in case it is older than today
          Intl.DateTimeFormat("en-gb", {
            weekday: "short",
            hour: "numeric",
            minute: "numeric",
          }).format(date)
        : Intl.DateTimeFormat("en-gb", {
            hour: "numeric",
            minute: "numeric",
          }).format(date);
    // divide by miliseconds, seconds, minutes, hours, days (in a week)
    const elapsed = (+date - +now) / 1000 / 60 / 60 / 24 / 7;
    const weeks =
      elapsed < -1
        ? // Show weeks ago only if it is more than a week old
          ", " + timeFormat.format(Math.ceil(elapsed), "week")
        : "";
    return `${day}${weeks}`;
  };

  return (
    <div>
      <Paper elevation={0} className={styles.sidebararticlepreview}>
        <Stack spacing={0}>
          <Typography variant="caption">{formatDate()}</Typography>
          <a
            className={styles.nostyle}
            href={props.url}
            target="_blank"
            rel="noreferrer"
          >
            <Typography variant="body1">{props.title}</Typography>
          </a>
        </Stack>
      </Paper>
    </div>
  );
};
