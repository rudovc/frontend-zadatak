import React from "react";
import { Article } from "../../componentInterfaces";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export class ArticlePreview extends React.Component<Article> {
  render() {
    return (
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {this.props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {this.props.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Read More</Button>
        </CardActions>
      </Card>
    );
  }
}
