import styles from "./articlegrid.module.scss";
import { Articles } from "../component-interfaces";
import { ArticlePreview } from "./article-grid/ArticlePreview";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export const ArticleGrid = (props: Articles) => {
  const filteredArticleList = [...props.articles].filter((element) => {
    const filter = props.nameFilter.toLowerCase();
    const title = element.title.toLowerCase();
    if (props.nameFilter === "") {
      return true;
    } else if (title.includes(filter)) {
      return true;
    } else return false;
  });
  const sortedArticleList = filteredArticleList.sort((o1, o2) => {
    if (o1.publishedAt !== null && o2.publishedAt !== null) {
      const date1 = +new Date(o1.publishedAt);
      const date2 = +new Date(o2.publishedAt);
      return date2 - date1;
    }
    return -1;
  });
  const displayedArticleList = sortedArticleList.map((element) => (
    <Grid item xs={6} key={`grid_item-${element.id}`}>
      <ArticlePreview {...element} key={element.id} />
    </Grid>
  ));
  return (
    <div className={styles.articleGrid}>
      <Typography variant="h6">News</Typography>
      <Grid container spacing={3}>
        {displayedArticleList}
      </Grid>
    </div>
  );
};
