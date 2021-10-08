import { Article } from "../../componentInterfaces";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";

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
  formatDate(date);
  return (
    <div className="sidebarArticlePreview">
      <Card>
        <CardHeader
          titleTypographyProps={{ variant: "subtitle1" }}
          title={
            <div>
              <Typography variant="caption">{formatDate(date)}</Typography>
              <Typography>{props.title}</Typography>
            </div>
          }
        />
      </Card>
    </div>
  );
};
