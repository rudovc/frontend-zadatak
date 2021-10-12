import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Article } from "./component-interfaces";
import { ArticlesPayload } from "./payload-interfaces";
import hash from "object-hash";
import Category from "./category-enums";
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
        const link = element.article.url === null ? "" : element.article.url;
        const { title, publishedAt, url, ...rest } = element.article;
        const result = {
          category: element.category,
          id: hash.sha1(element),
          publishedAt: date,
          title: name,
          url: link,
          ...rest,
        };
        if (state.articles.includes(result) === false) {
          return [result];
        } else return [];
      });

      // Sort the articles chronologically whenever a new set is added
      const unsortedArticles = [...state.articles, ...dataWithID];
      const sortedArticles = unsortedArticles.sort((o1, o2) => {
        if (o1.publishedAt !== null && o2.publishedAt !== null) {
          const date1 = +new Date(o1.publishedAt);
          const date2 = +new Date(o2.publishedAt);
          return date2 - date1;
        }
        return -1;
      });

      state.articles = sortedArticles;
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
