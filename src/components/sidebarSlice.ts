import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ArticlesProp, Article } from "./componentInterfaces";
import { v4 as uuidv4 } from "uuid";
import { SidebarTab } from "./tabEnums";

export const sidebarSlice = createSlice({
  name: "sidebarState",
  initialState: {
    data: {
      articles: [] as Article[],
    },
    favorites: [] as Article[],
    tabs: {
      value: SidebarTab.Latest,
    },
  },
  reducers: {
    setActiveSidebarTab: (state, action: PayloadAction<SidebarTab>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.tabs.value = action.payload;
    },
    updateArticlesInSidebar: (state, action: PayloadAction<ArticlesProp>) => {
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
    updateArticlesToShowFavorites: (state) => {
      state.data.articles = state.favorites;
    },
    addArticleToFavorites: (state, action: PayloadAction<Article>) => {
      const data = action.payload;
      state.favorites.push(data);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  updateArticlesInSidebar,
  updateArticlesToShowFavorites,
  addArticleToFavorites,
  setActiveSidebarTab,
} = sidebarSlice.actions;

export default sidebarSlice.reducer;
