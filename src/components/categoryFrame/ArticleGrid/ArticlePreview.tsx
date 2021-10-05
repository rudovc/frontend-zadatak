import React from "react";
import { Article } from "../../componentInterfaces";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export class ArticlePreview extends React.Component<Article> {
  render() {
    const date = !this.props.publishedAt
      ? ""
      : new Date(this.props.publishedAt).toDateString();
    const image = !this.props.urlToImage ? "" : this.props.urlToImage;

    return (
      <div className="articlePreview">
        <Card>
          <CardMedia component="img" height="140" image={image} alt="image" />
          <CardHeader
            titleTypographyProps={{ variant: "subtitle1" }}
            title={this.props.title}
            subheaderTypographyProps={{ variant: "caption" }}
            subheader={date}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {this.props.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Read More</Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}
