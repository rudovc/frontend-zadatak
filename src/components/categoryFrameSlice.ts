import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Article } from "./componentInterfaces";
import { ArticlesPayload } from "./payloadInterfaces";
import hash from "object-hash";
import Category from "./categoryEnums";
import { CategoryFrameState } from "./sliceInterfaces";

export const categoryFrameSlice = createSlice({
  name: "articlesByCategory",
  initialState: {
    articles: [] as Article[],
  },
  reducers: {
    updateArticles: (state, action: PayloadAction<ArticlesPayload[]>) => {
      const dataWithID = action.payload.flatMap((element) => {
        const name =
          element.article.title === null ? "" : element.article.title;
        const date =
          element.article.publishedAt === null
            ? Date()
            : element.article.publishedAt;
        const { title, publishedAt, ...rest } = element.article;
        const result = {
          category: element.category,
          id: hash.sha1(element),
          publishedAt: date,
          title: name,
          ...rest,
        };
        if (state.articles.includes(result) === false) {
          return [result];
        } else return [];
      });
      state.articles.push(...dataWithID);
    },
  },
});

// Selectors
export const selectArticlesByCategory = (
  state: CategoryFrameState,
  category: Category
) => {
  if (category === Category.Home) {
    return state.articles;
  } else {
    return state.articles.filter((element) => element.category === category);
  }
};

export const selectAllArticles = (state: CategoryFrameState) => {
  return state.articles;
};

// Action creators are generated for each case reducer function
export const { updateArticles } = categoryFrameSlice.actions;

export default categoryFrameSlice.reducer;
