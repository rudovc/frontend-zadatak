import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ArticlesProp, Article } from "./componentInterfaces";

export const categoryFrameSlice = createSlice({
  name: "articlesByCategory",
  initialState: {
    data: {
      articles: [] as Article[],
    },
  },
  reducers: {
    updateArticlesByCategory: (state, action: PayloadAction<ArticlesProp>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateArticlesByCategory } = categoryFrameSlice.actions;

export default categoryFrameSlice.reducer;
