import axios, { AxiosResponse } from "axios";
import Category from "./category-enums";
import { ArticlesRawData } from "./interfaces/data-interfaces";

/*import dataBusiness from "./data/dummyData-business.json";
import dataGeneral from "./data/dummyData-general.json";
import dataHealth from "./data/dummyData-health.json";
import dataScience from "./data/dummyData-science.json";
import dataSports from "./data/dummyData-sports.json";
import dataTechnology from "./data/dummyData-technology.json";

function delayResolve(input: ArticlesRawData) {
  return new Promise<{ data: ArticlesRawData }>((resolve) =>
    setTimeout(() => resolve({ data: input }), 300)
  );
}*/

const axiosApi = axios.create({
  baseURL: `https://newsapi.org/v2/top-headlines/`,
  params: {
    apiKey: "508c3821ebf249dca6c629a676144687",
    language: "en",
  },
});

/*const getPage = (page: number): { start: number; end: number } => {
  return { start: page * 20 - 20, end: page * 20 };
};*/

class API {
  static getArticles(
    categoryParameter: Category,
    pageNumber: number
  ): Promise<AxiosResponse<ArticlesRawData>> {
    const response = axiosApi.get<ArticlesRawData>("", {
      params: { category: categoryParameter, page: pageNumber },
    });
    return response;
  }

  /*static getArticles(
    category: Category,
    page: number
  ): Promise<{ data: ArticlesRawData | undefined }> {
    const range = getPage(page);
    switch (category) {
      case Category.Business: {
        const data = delayResolve({
          articles: dataBusiness.articles.slice(range.start, range.end),
        });
        return data;
      }
      case Category.General: {
        const data = delayResolve({
          articles: dataGeneral.articles.slice(range.start, range.end),
        });
        return data;
      }
      case Category.Health: {
        const data = delayResolve({
          articles: dataHealth.articles.slice(range.start, range.end),
        });
        return data;
      }
      case Category.Science: {
        const data = delayResolve({
          articles: dataScience.articles.slice(range.start, range.end),
        });
        return data;
      }
      case Category.Sports: {
        const data = delayResolve({
          articles: dataSports.articles.slice(range.start, range.end),
        });
        return data;
      }
      case Category.Technology: {
        const data = delayResolve({
          articles: dataTechnology.articles.slice(range.start, range.end),
        });
        return data;
      }
    }
    return Promise.resolve({ data: undefined });
  }*/
}

export default API;
