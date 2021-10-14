import styles from "./articlegrid.module.scss";
import { Articles } from "../../data-interfaces";
import { ArticlePreview } from "./article-grid/ArticlePreview";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { isMobileOnly } from "react-device-detect";

export const ArticleGrid = (props: Articles) => {
  const filteredArticleList = [...props.articles].filter((element) => {
    const filter = props.nameFilter.toLowerCase().split(" ");
    const title = element.title.toLowerCase();
    if (props.nameFilter === "") {
      return true;
    } else {
      return filter.every((word) => title.includes(word));
    }
  });
  const sortedArticleList = filteredArticleList.sort((o1, o2) => {
    if (o1.publishedAt !== null && o2.publishedAt !== null) {
      const date1 = +new Date(o1.publishedAt);
      const date2 = +new Date(o2.publishedAt);
      return date2 - date1;
    }
    return -1;
  });

  const gridElementWidth = isMobileOnly ? 12 : 6;

  const displayedArticleList = sortedArticleList.map((element) => (
    <Grid item xs={gridElementWidth} key={`grid_item-${element.id}`}>
      <ArticlePreview {...element} key={element.id} />
    </Grid>
  ));

  if (isMobileOnly) {
    return (
      <div className={styles.articleGrid}>
        <Grid container spacing={3}>
          {displayedArticleList}
        </Grid>
      </div>
    );
  } else {
    return (
      <div className={styles.articleGrid}>
        <Typography variant="h6">News</Typography>
        <Grid container spacing={3}>
          {displayedArticleList}
        </Grid>
      </div>
    );
  }
};
