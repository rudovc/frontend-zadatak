import { useEffect } from "react";
import "./App.scss";
import { Homepage } from "./components/Homepage";
import Category from "./components/categoryEnums";
import { useAppDispatch, useAppSelector } from "./hooks";
import { updateArticlesByCategory } from "./components/categoryFrameSlice";
import { updateArticlesInSidebar } from "./components/sidebarSlice";
import API from "./api";
import { ArticlesProp } from "./components/componentInterfaces";
import dataGeneral from "./data/dummyData-general.json";
import dataBusiness from "./data/dummyData-business.json";
import dataEntertainment from "./data/dummyData-entertainment.json";
import dataHealth from "./data/dummyData-health.json";
import dataScience from "./data/dummyData-science.json";
import dataSports from "./data/dummyData-sports.json";
import dataTechnology from "./data/dummyData-technology.json";

function App() {
  const data = {
    categoryArticles: useAppSelector(
      (state) => state.categoryFrameArticles.data
    ),
    sidebarArticles: useAppSelector((state) => state.sidebarArticles.data),
    /*sidebarArticles: useAppSelector((state) => state.sidebarArticles.data);*/
  };
  const dispatch = useAppDispatch();
  // too many requests lol idemo koristit dummy data dok mi ne zavrsi timeout
  /*
  useEffect(() => {
    async function getData() {
      const business = await API.get<ArticlesProp>("", {
        params: { category: Category.Business },
      });

      const latest = await API.get<ArticlesProp>("", {
        params: { category: Category.Latest },
      });
*/
  dispatch(updateArticlesByCategory(dataBusiness));
  dispatch(updateArticlesInSidebar(dataGeneral));
  /*
    }
    getData();
  });*/

  return (
    <Homepage
      categoryArticles={data.categoryArticles}
      sidebarArticles={data.sidebarArticles}
    />
  );
}

export default App;
