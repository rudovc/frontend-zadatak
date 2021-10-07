import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ArticlesProp, Article } from "./componentInterfaces";
import hash from "object-hash";

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
      // Redux Toolkit allows us to write "mutatsing" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      const dataWithID = action.payload.articles.map((element) => {
        const result = { id: hash.sha1(element), ...element };
        return result;
      });
      state.data.articles = dataWithID;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateArticlesInCategoryFrame } = categoryFrameSlice.actions;

export default categoryFrameSlice.reducer;
