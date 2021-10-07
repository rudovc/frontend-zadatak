import { useAppSelector } from "../../hooks";
import { SidebarTab } from "../tabEnums";
import List from "@mui/material/List";
import "../components.scss";
import { SidebarArticlePreview } from "./SidebarList/SidebarArticlePreview";
import { Article } from "../componentInterfaces";

export const SidebarList = () => {
  const activeTab = useAppSelector((state) => state.sidebar.tabs.value);

  const favorites = useAppSelector((state) => state.sidebar.favorites);
  const latest = useAppSelector((state) => state.sidebar.data.articles);

  const articlesToDisplay =
    activeTab === SidebarTab.Latest ? latest : favorites;

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
