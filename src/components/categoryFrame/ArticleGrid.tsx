import "../components.scss";
import { ArticlesProp } from "../componentInterfaces";
import { ArticlePreview } from "./ArticleGrid/ArticlePreview";
import Grid from "@mui/material/Grid";

export const ArticleGrid = (props: ArticlesProp) => {
  const articleList = props.articles.map((element) => (
    <Grid item xs={3}>
      <ArticlePreview {...element} />
    </Grid>
  ));
  return (
    <div className="articleGrid">
      <Grid container spacing={1}>
        {articleList}
      </Grid>
    </div>
  );
};
