import React from "react";
import { Article } from "../../componentInterfaces";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";

export const SidebarArticlePreview = (props: Article) => {
  const date = !props.publishedAt
    ? ""
    : new Date(props.publishedAt).toDateString();
  return (
    <div className="sidebarArticlePreview">
      <Card>
        <CardHeader
          titleTypographyProps={{ variant: "subtitle1" }}
          title={props.title}
          subheaderTypographyProps={{ variant: "caption" }}
          subheader={date}
        />
        <CardActions>
          <Button size="small">Read More</Button>
        </CardActions>
      </Card>
    </div>
  );
};
