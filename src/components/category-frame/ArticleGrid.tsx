import styles from "./articlegrid.module.scss";
import { Articles } from "../../data-interfaces";
import { Sidebar } from "../Sidebar";
import { ArticlePreview } from "./article-grid/ArticlePreview";
import Typography from "@mui/material/Typography";
import { isMobileOnly } from "react-device-detect";

export const ArticleGrid = (props: Articles) => {
  const sortedArticleList = [...props.articles].sort((o1, o2) => {
    if (o1.publishedAt !== null && o2.publishedAt !== null) {
      const date1 = +new Date(o1.publishedAt);
      const date2 = +new Date(o2.publishedAt);
      return date2 - date1;
    }
    return -1;
  });

  const displayedArticles = sortedArticleList.map((element) => {
    return (
      <ArticlePreview
        className={styles.articlecard}
        {...element}
        key={element.id}
      />
    );
  });

  if (isMobileOnly) {
    return <div className={styles.articlegridmobile}>{displayedArticles}</div>;
  } else {
    return (
      <div className={styles.framelayout}>
        <Typography variant="h6">News</Typography>
        <div className={styles.articlegrid}>
          {displayedArticles}
          <Sidebar className={styles.sidebardesktop} />
        </div>
      </div>
    );
  }
};
