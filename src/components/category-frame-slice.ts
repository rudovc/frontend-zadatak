import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Article } from "../data-interfaces";
import { ArticlesPayload } from "../payload-interfaces";
import Category from "../category-enums";
import { RootState } from "../store";
import { crc32 } from "crc";

export const categoryFrameSlice = createSlice({
  name: "articlesByCategory",
  initialState: {
    articles: [] as Article[],
    idList: [] as string[],
    page: 1,
  },
  reducers: {
    updateArticles: (state, action: PayloadAction<ArticlesPayload[]>) => {
      // Map array of articles from payload and generate an ID for each of them
      const dataWithID: Article[] = action.payload.flatMap((element) => {
        const name =
          element.article.title === null ? "" : element.article.title;
        const date =
          element.article.publishedAt === null
            ? Date()
            : element.article.publishedAt;
        const link = element.article.url === null ? "" : element.article.url;
        const { title, publishedAt, url, ...rest } = element.article;
        const mappedArticle = {
          category: element.category,
          id: crc32(Object.values({ ...rest }).toString()).toString(16),
          publishedAt: date,
          title: name,
          url: link,
          ...rest,
        };
        const articlesInState = state.articles;
        if (state.idList.includes(mappedArticle.id)) {
          if (mappedArticle.category !== Category.General) {
            const index = articlesInState.findIndex(
              (element) => element.id === mappedArticle.id
            );
              if (index !== -1) {
              state.articles.splice(index, 1);
            }
            else {
              return [];
            }
            return [mappedArticle];
          } else {
            return [];
          }
        } else {
          state.idList.push(mappedArticle.id);
          return [mappedArticle];
        }
      });

      const sortedArticles = [...state.articles, ...dataWithID].sort(
        (o1, o2) => {
          if (o1.publishedAt !== null && o2.publishedAt !== null) {
            const date1 = +new Date(o1.publishedAt);
            const date2 = +new Date(o2.publishedAt);
            return date2 - date1;
          }
          return -1;
        }
      );

      state.articles = sortedArticles;

      state.page = state.page + action.payload.length / 20;
    },
  },
});

// Selectors
export const selectPage = (state: RootState): number => {
  return Math.floor(state.categoryFrameArticles.page / 6);
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
  const articlesToReturn = idFilter.flatMap((id) => {
    const article = state.categoryFrameArticles.articles.find(
      (element) => element.id === id
    );
    if (typeof article === "undefined") {
      return [] as Article[];
    } else {
      return [article];
    }
  });
  return articlesToReturn;
};

export const selectAllArticles = (state: RootState): Article[] => {
  return Array.from(state.categoryFrameArticles.articles.values());
};

// Action creators are generated for each case reducer function
export const { updateArticles } = categoryFrameSlice.actions;

export default categoryFrameSlice.reducer;
