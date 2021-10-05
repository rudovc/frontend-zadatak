import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import Category from "./categoryEnums";
import * as API from "../api";

export const categoryFrameArticlesSlice = createSlice({
  name: "categoryFrameArticles",
  initialState: {
    data: API.sendGetRequest({ params: { category: Category.Business } }),
  },
  reducers: {
    updateArticles: (state, action: PayloadAction<Category>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      const data = API.sendGetRequest({ params: { category: action.payload } });
      state.data = data;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateArticles } = categoryFrameArticlesSlice.actions;

export const selectActiveCategoryTab = (state: RootState) =>
  state.categoryTabs.value;

export default categoryFrameArticlesSlice.reducer;
