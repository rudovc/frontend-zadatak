import styles from "./styles/articlegrid.module.scss";
import { Sidebar } from "../Sidebar";
import { ArticlePreview } from "./article-grid/ArticlePreview";
import Typography from "@mui/material/Typography";
import { isMobileOnly } from "react-device-detect";
import { CategoryTab } from "../tab-enums";
import { ArticleGridProps } from "../../interfaces/component-interfaces";

export const ArticleGrid = (props: ArticleGridProps) => {
  const handleClick = (arg: CategoryTab) => {
    if (typeof props.onCategoryClick !== "undefined") {
      props.onCategoryClick(arg);
    }
  };

  const displayedArticles = props.articles.map((element) => {
    return (
      <ArticlePreview
        className={styles.articlecard}
        article={element}
        key={element.id}
        onCategoryClick={handleClick}
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
