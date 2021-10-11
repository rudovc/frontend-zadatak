import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Article } from "./componentInterfaces";
import { ArticlesPayload } from "./payloadInterfaces";
import hash from "object-hash";
import Category from "./categoryEnums";
import { RootState } from "../store";

export const categoryFrameSlice = createSlice({
  name: "articlesByCategory",
  initialState: {
    articles: [] as Article[],
    page: 1,
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
      state.page = Math.floor(state.articles.length / 10 / 6);
    },
  },
});

// Selectors
export const selectPage = (state: RootState): number => {
  return state.categoryFrameArticles.page;
};

export const selectArticlesByCategory = (
  state: RootState,
  category: Category
): Article[] => {
  if (category === Category.Home) {
    return state.categoryFrameArticles.articles;
  } else {
    return state.categoryFrameArticles.articles.filter(
      (element) => element.category === category
    );
  }
};

export const selectArticlesByID = (
  state: RootState,
  idFilter: string[]
): Article[] => {
  return state.categoryFrameArticles.articles.filter((element) => {
    return idFilter.find((id) => {
      if (element.id === id) {
        return true;
      } else {
        return false;
      }
    });
  });
};

export const selectAllArticles = (state: RootState): Article[] => {
  return state.categoryFrameArticles.articles;
};

// Action creators are generated for each case reducer function
export const { updateArticles } = categoryFrameSlice.actions;

export default categoryFrameSlice.reducer;
