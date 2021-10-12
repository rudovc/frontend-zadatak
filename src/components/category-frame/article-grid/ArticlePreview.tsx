import styles from "./articlepreview.module.scss";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import {
  addArticleToFavorites,
  removeArticleFromFavorites,
} from "../../sidebar-slice";
import { setActiveCategoryTab } from "../category-tabs-slice";
import { Article } from "../../component-interfaces";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Stack from "@mui/material/Stack";
import ButtonBase from "@mui/material/ButtonBase";
import Fade from "@mui/material/Fade";
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

  const handleFavoriteClick = () => {
    if (!isFavorite) {
      dispatch(addArticleToFavorites({ ...props }));
    } else {
      dispatch(removeArticleFromFavorites({ ...props }));
    }
    setIsFavorite(!isFavorite);
  };

  const handleCategoryClick = () => {
    dispatch(setActiveCategoryTab(props.category));
  };

  useEffect(() => {
    setIsFavorite(isInFavorites());
  }, [isInFavorites]);

  return (
    <div>
      <Fade in={true} timeout={500}>
        <Card className={styles.articlepreviewcard}>
          <CardMedia component="img" height="140" image={image} alt="image" />
          <CardContent className={styles.cardcontent}>
            <ButtonBase onClick={handleCategoryClick}>
              <Typography variant="overline" className={styles.categorylink}>
                {props.category.toUpperCase()}
              </Typography>
            </ButtonBase>
            <a
              className={styles.nostyle}
              target="_blank"
              rel="noreferrer"
              href={props.url}
            >
              <Typography>{props.title}</Typography>
            </a>
            <Stack direction="row" className={styles.cardbottom}>
              <Typography variant="caption" className={styles.authorname}>
                {props.author}
              </Typography>
              <span className={styles.favoritesbutton}>
                <IconButton aria-label="favorite" onClick={handleFavoriteClick}>
                  {isFavorite ? <FavoriteIcon /> : <FavoriteBorder />}
                </IconButton>
              </span>
            </Stack>
          </CardContent>
        </Card>
      </Fade>
    </div>
  );
};
