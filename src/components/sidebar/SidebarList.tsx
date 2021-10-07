import { useAppSelector } from "../../hooks";
import List from "@mui/material/List";
import "../components.scss";
import { SidebarArticlePreview } from "./SidebarList/SidebarArticlePreview";

export const SidebarList = () => {
  const articlesToDisplay = useAppSelector(
    (state) => state.sidebar.data.articles
  );
  const articleList = articlesToDisplay.map((element) => (
    <SidebarArticlePreview {...element} />
  ));

  return (
    <div className="sidebarList">
      <List style={{ maxHeight: "100vh", overflow: "auto" }}>
        {articleList}
      </List>
    </div>
  );
};
