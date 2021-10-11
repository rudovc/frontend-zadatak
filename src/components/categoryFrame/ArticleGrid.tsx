//import styles from "./ArticleGrid.modules.scss";
import { Articles } from "../componentInterfaces";
import { ArticlePreview } from "./ArticleGrid/ArticlePreview";
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
    <Grid item xs={4} key={`grid_item-${element.id}`}>
      <ArticlePreview {...element} key={element.id} />
    </Grid>
  ));
  return (
    <div className="articleGrid">
      <Typography>News</Typography>
      <Grid container spacing={1}>
        {displayedArticleList}
      </Grid>
    </div>
  );
};
