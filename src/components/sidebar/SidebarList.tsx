import { useAppSelector } from "../../hooks";
import List from "@mui/material/List";
import "../components.scss";
import { SidebarArticlePreview } from "./SidebarList/SidebarArticlePreview";
import { Article } from "../componentInterfaces";
import { selectActiveSidebarTab } from "../sidebarSlice";

export const SidebarList = () => {
  const activeTab = useAppSelector(() => selectActiveSidebarTab);
  const favorites = useAppSelector((state) => state.sidebar.favorites);
  const latest = useAppSelector((state) => state.sidebar.articles);

  const articlesToDisplay = latest;
  /* activeTab === SidebarTab.Latest ? latest : favorites; // 2nd return should be favorites!!!*/

  const articleList = articlesToDisplay.map((element: Article) => (
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
