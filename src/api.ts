import axios from "axios";
import { ArticlesProp } from "./components/componentInterfaces";
import { Params } from "./apiInterfaces";

export const API = axios.create({
  baseURL: `https://newsapi.org/v2/top-headlines/`,
  params: {
    apiKey: "508c3821ebf249dca6c629a676144687",
  },
});

export const sendGetRequest = async (params: Params) => {
  const resp = await API.get<ArticlesProp>("", {
    params: {
      category: "business",
    },
  });
  console.log(resp.data);
  return resp.data;
};

export default API;
