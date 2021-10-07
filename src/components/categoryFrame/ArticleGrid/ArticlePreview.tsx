import { useState } from "react";
import { useAppDispatch } from "../../../hooks";
import {
  addArticleToFavorites,
  updateArticlesInSidebar,
} from "../../sidebarSlice";
import { Article } from "../../componentInterfaces";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";

export const ArticlePreview = (props: Article) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const dispatch = useAppDispatch();

  const date = !props.publishedAt
    ? ""
    : new Date(props.publishedAt).toDateString();
  const image = !props.urlToImage ? "" : props.urlToImage;

  const handleClick = () => {
    dispatch(addArticleToFavorites({ ...props }));
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="articlePreview">
      <Card>
        <CardMedia component="img" height="140" image={image} alt="image" />
        <CardHeader
          titleTypographyProps={{ variant: "subtitle1" }}
          title={props.title}
          subheaderTypographyProps={{ variant: "caption" }}
          subheader={date}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Read More</Button>
          <IconButton aria-label="favorite" onClick={handleClick}>
            {isFavorite ? <FavoriteIcon /> : <FavoriteBorder />}
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};
