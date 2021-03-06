import styles from "./articlepreview.module.scss";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import {
  addArticleToFavorites,
  removeArticleFromFavorites,
} from "../../slices/sidebar-slice";
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
import { ArticlePreviewProps } from "../../../interfaces/component-interfaces";
import { CategoryTab } from "../../tab-enums";

// Ima li koji drugi nacin osim ovaj '&'
export const ArticlePreview = (props: ArticlePreviewProps) => {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector((state) => state.sidebar.favorites);

  const title = props.article.title;

  const isInFavorites = useCallback(() => {
    return Boolean(
      favorites.filter((element) => element === props.article.id).length
    );
  }, [favorites, props.article.id]);

  const [isFavorite, setIsFavorite] = useState(isInFavorites());

  const image = !props.article.urlToImage ? "" : props.article.urlToImage;

  const handleFavoriteClick = () => {
    if (!isFavorite) {
      dispatch(addArticleToFavorites({ ...props.article }));
    } else {
      dispatch(removeArticleFromFavorites({ ...props.article }));
    }
    setIsFavorite(!isFavorite);
  };

  const handleCategoryClick = () => {
    if (typeof props.onCategoryClick !== "undefined") {
      const newCategory =
        props.article.category.charAt(0).toUpperCase() +
        props.article.category.slice(1);
      props.onCategoryClick(
        CategoryTab[newCategory as keyof typeof CategoryTab]
      );
    }
  };

  const CardImage = () => {
    if (image !== "") {
      return (
        // Kako prikazat fallback ako dobijen error
        <CardMedia component="img" height="140" image={image} alt="image" />
      );
    } else {
      return (
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
          <CardImage />
          <CardContent className={styles.cardcontent}>
            <ButtonBase
              onClick={handleCategoryClick}
              className={styles.categorybutton}
            >
              <Typography variant="overline" className={styles.categorylink}>
                {props.article.category.toUpperCase()}
              </Typography>
            </ButtonBase>
            <a
              className={styles.nostyle}
              target="_blank"
              rel="noreferrer"
              href={props.article.url}
            >
              <Typography>{title}</Typography>
            </a>
            <div className={styles.cardbottom}>
              <div className={styles.cardbottomcontainer}>
                <Typography variant="caption" className={styles.authorname}>
                  {props.article.author}
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
