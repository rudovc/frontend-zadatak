import "./App.scss";
import { Homepage } from "./components/Homepage";
import { useAppSelector } from "./hooks";

function App() {
  const data = {
    categoryArticles: useAppSelector(
      (state) => state.categoryFrameArticles.data
    ),
    sidebarArticles: useAppSelector((state) => state.sidebarArticles.data),
  };

  return (
    <Homepage
      categoryArticles={data.categoryArticles}
      sidebarArticles={data.sidebarArticles}
    />
  );
}

export default App;
