import { Article } from "../../componentInterfaces";
import Paper from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

function formatDate(date: Date) {
  const now = new Date();
  const day =
    date.getDay() !== now.getDay()
      ? Intl.DateTimeFormat("en-gb", {
          weekday: "short",
          hour: "numeric",
          minute: "numeric",
        }).format(date)
      : Intl.DateTimeFormat("en-gb", {
          hour: "numeric",
          minute: "numeric",
        }).format(date);
  return day;
}

export const SidebarArticlePreview = (props: Article) => {
  const date = new Date(props.publishedAt);
  return (
    <div className="sidebarArticlePreview">
      <Paper elevation={0}>
        <Stack spacing={1}>
          <Typography variant="caption">{formatDate(date)}</Typography>
          <Typography variant="body1">{props.title}</Typography>
        </Stack>
      </Paper>
    </div>
  );
};
