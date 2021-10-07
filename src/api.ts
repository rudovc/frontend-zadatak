import axios from "axios";
import Category from "./components/categoryEnums";
import { ArticlesProp } from "./components/componentInterfaces";
// waiting for timeout to run out
import dataGeneral from "./data/dummyData-general.json";
import dataBusiness from "./data/dummyData-business.json";
import dataEntertainment from "./data/dummyData-entertainment.json";
import dataHealth from "./data/dummyData-health.json";
import dataScience from "./data/dummyData-science.json";
import dataSports from "./data/dummyData-sports.json";
import dataTechnology from "./data/dummyData-technology.json";
/*
const axiosApi = axios.create({
  baseURL: `https://newsapi.org/v2/top-headlines/`,
  params: {
    apiKey: "508c3821ebf249dca6c629a676144687",
    language: "en",
  },
});*/
class API {
  /*static async getArticlesByCategory(categoryParameter: Category) {
    const response = axiosApi.get<ArticlesProp>("", {
      params: { category: categoryParameter },
    });
    return response;
  }*/
  static getArticles(category: Category) {
    switch (category) {
      case Category.Latest:
        const latest = new Promise<ArticlesProp>((resolve) => {
          setTimeout(() => {
            resolve(dataGeneral);
          }, 300);
        });
        return latest;
      case Category.Business:
        const business = new Promise<ArticlesProp>((resolve) => {
          setTimeout(() => {
            resolve(dataBusiness);
          }, 300);
        });
        return business;
      case Category.Entertainment:
        const entertainment = new Promise<ArticlesProp>((resolve) => {
          setTimeout(() => {
            resolve(dataEntertainment);
          }, 300);
        });
        return entertainment;
      case Category.Health:
        const health = new Promise<ArticlesProp>((resolve) => {
          setTimeout(() => {
            resolve(dataHealth);
          }, 300);
        });
        return health;
      case Category.Science:
        const science = new Promise<ArticlesProp>((resolve) => {
          setTimeout(() => {
            resolve(dataScience);
          }, 300);
        });
        return science;
      case Category.Sports:
        const sports = new Promise<ArticlesProp>((resolve) => {
          setTimeout(() => {
            resolve(dataSports);
          }, 300);
        });
        return sports;
      case Category.Technology:
        const technology = new Promise<ArticlesProp>((resolve) => {
          setTimeout(() => {
            resolve(dataTechnology);
          }, 300);
        });
        return technology;
    }
  }
}

export default API;
