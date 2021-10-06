import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { ArticlesProp, Article } from "./componentInterfaces";
import { v4 as uuidv4 } from "uuid";
import Category from "./categoryEnums";
import API from "../api";

export const getArticlesByCategory = createAsyncThunk(
  "getArticlesByCategory",
  async (category: Category) => {
    const response = await API.getArticles(category);
    return response;
  }
);

export const categoryFrameSlice = createSlice({
  name: "articlesByCategory",
  initialState: {
    data: {
      articles: [] as Article[],
    },
  },
  reducers: {
    updateArticlesInCategoryFrame: (
      state,
      action: PayloadAction<ArticlesProp>
    ) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      const dataWithID = action.payload.articles.map((element, index) => {
        const result = { id: uuidv4(), ...element };
        //const result = { id: index.toString(), ...element };
        return result;
      });
      state.data.articles = dataWithID;
    },
    updateArticlesByCategory: (state, action: PayloadAction<Category>) => {},
  },
});

// Action creators are generated for each case reducer function
export const { updateArticlesInCategoryFrame, updateArticlesByCategory } =
  categoryFrameSlice.actions;

export default categoryFrameSlice.reducer;
