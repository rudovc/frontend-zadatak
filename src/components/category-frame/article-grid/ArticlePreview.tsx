import styles from "./articlepreview.module.scss";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import {
  addArticleToFavorites,
  removeArticleFromFavorites,
} from "../../sidebar-slice";
import { setActiveCategoryTab } from "../category-tabs-slice";
import { Article } from "../../../data-interfaces";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import ButtonBase from "@mui/material/ButtonBase";
import Fade from "@mui/material/Fade";
import CircularProgress from "@mui/material/CircularProgress";
import { useCallback } from "react";
import { IProps } from "../../component-interfaces";

// Ima li koji drugi nacin osim ovaj '&'
export const ArticlePreview = (props: Article & IProps) => {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector((state) => state.sidebar.favorites);

  const title = props.title;

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

  /*// Nesto ruzno pt.1
  const loading = () => {
    return <CircularProgress variant="indeterminate"/>;
  };*/

  const isImageLoading = () => {
    if (image !== "") {
      return (
        // Kako prikazat fallback ako dobijen error
        <CardMedia component="img" height="140" image={image} alt="image" />
      );
    } else {
      return (
        /*<CardMedia
          className={styles.noimageloaded}
          // Nesto ruzno pt.2: kako bolje, zasto ne da, pise da prihvaca komponente?
          component={loading as ElementType}
          height="140"
          alt="image not loaded"
        />*/
        <div className={styles.noimageloaded}>
          <CircularProgress
            variant="indeterminate"
            className={styles.loadinganimation}
          />
        </div>
      );
    }
  };

  useEffect(() => {
    setIsFavorite(isInFavorites());
  }, [isInFavorites]);

  return (
    <div className={props.className}>
      <Fade in={true} timeout={500}>
        <Card className={styles.articlepreviewcard}>
          {isImageLoading()}
          {/*Kako ovaj bottom padding?*/}
          <CardContent className={styles.cardcontent}>
            <ButtonBase
              onClick={handleCategoryClick}
              className={styles.categorybutton}
            >
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
              <Typography>{title}</Typography>
            </a>
            <div className={styles.cardbottom}>
              <div className={styles.cardbottomcontainer}>
                <Typography variant="caption" className={styles.authorname}>
                  {props.author}
                </Typography>
                <div className={styles.favoritesbutton}>
                  <IconButton
                    aria-label="favorite"
                    onClick={handleFavoriteClick}
                  >
                    {isFavorite ? <FavoriteIcon /> : <FavoriteBorder />}
                  </IconButton>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </Fade>
    </div>
  );
};
