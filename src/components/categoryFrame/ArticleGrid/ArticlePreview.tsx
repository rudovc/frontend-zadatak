import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import {
  addArticleToFavorites,
  removeArticleFromFavorites,
} from "../../sidebarSlice";
import { Article } from "../../componentInterfaces";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Stack from "@mui/material/Stack";
import { useCallback } from "react";

// ima li koji drugi nacin osim ovaj '&' koji nisan niti moga nac u novoj verziji handbooka
export const ArticlePreview = (props: Article & { key: string }) => {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector((state) => state.sidebar.favorites);

  const isInFavorites = useCallback(() => {
    return Boolean(favorites.filter((element) => element === props.id).length);
  }, [favorites, props.id]);

  const [isFavorite, setIsFavorite] = useState(isInFavorites());

  const image = !props.urlToImage ? "" : props.urlToImage;

  const handleClick = () => {
    if (!isFavorite) {
      dispatch(addArticleToFavorites({ ...props }));
    } else {
      dispatch(removeArticleFromFavorites({ ...props }));
    }
    setIsFavorite(!isFavorite);
  };

  useEffect(() => {
    setIsFavorite(isInFavorites());
  }, [isInFavorites]);

  return (
    <div className="articlePreview">
      <Card>
        <CardMedia component="img" height="140" image={image} alt="image" />
        <CardHeader
          title={
            <div>
              <Typography variant="caption">
                {props.category.toUpperCase()}
              </Typography>
              <Typography>{props.title}</Typography>
            </div>
          }
          subheaderTypographyProps={{ variant: "caption" }}
          subheader={
            <div>
              <Stack direction="row">
                {props.author}
                <IconButton aria-label="favorite" onClick={handleClick}>
                  {isFavorite ? <FavoriteIcon /> : <FavoriteBorder />}
                </IconButton>
              </Stack>
            </div>
          }
        />
      </Card>
    </div>
  );
};
