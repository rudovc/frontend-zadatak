import axios from "axios";
import Category from "./components/categoryEnums";
import { ArticleRawData } from "./components/componentInterfaces";
// waiting for timeout to run out
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
    const response = axiosApi.get<Articles>("", {
      params: { category: categoryParameter },
    });
    return response;
  }*/
  static getArticles(category: Category) {
    switch (category) {
      case Category.Business:
        const business = new Promise<ArticleRawData[]>((resolve) => {
          setTimeout(() => {
            resolve(dataBusiness.articles);
          }, 300);
        });
        return business;
      case Category.Entertainment:
        const entertainment = new Promise<ArticleRawData[]>((resolve) => {
          setTimeout(() => {
            resolve(dataEntertainment.articles);
          }, 300);
        });
        return entertainment;
      case Category.Health:
        const health = new Promise<ArticleRawData[]>((resolve) => {
          setTimeout(() => {
            resolve(dataHealth.articles);
          }, 300);
        });
        return health;
      case Category.Science:
        const science = new Promise<ArticleRawData[]>((resolve) => {
          setTimeout(() => {
            resolve(dataScience.articles);
          }, 300);
        });
        return science;
      case Category.Sports:
        const sports = new Promise<ArticleRawData[]>((resolve) => {
          setTimeout(() => {
            resolve(dataSports.articles);
          }, 300);
        });
        return sports;
      case Category.Technology:
        const technology = new Promise<ArticleRawData[]>((resolve) => {
          setTimeout(() => {
            resolve(dataTechnology.articles);
          }, 300);
        });
        return technology;
    }
  }
}

export default API;
