import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ArticlesProp, Article } from "./componentInterfaces";
import hash from "object-hash";
import { SidebarTab } from "./tabEnums";

const serialisedFavorites = localStorage.getItem("storedFavorites");
const loadedFavorites: Article[] =
  serialisedFavorites === null
    ? ([] as Article[])
    : JSON.parse(serialisedFavorites);

export const sidebarSlice = createSlice({
  name: "sidebarState",
  initialState: {
    data: {
      articles: [] as Article[],
    },
    favorites: loadedFavorites,
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
      const dataWithID = action.payload.articles.map((element) => {
        const result = { id: hash.sha1(element), ...element };
        //const result = { id: index.toString(), ...element };
        return result;
      });
      state.data.articles = dataWithID;
    },
    addArticleToFavorites: (state, action: PayloadAction<Article>) => {
      const data = action.payload;
      state.favorites.push(data);
      const favoritesToStore = JSON.stringify(state.favorites);
      localStorage.setItem("storedFavorites", favoritesToStore);
    },
    removeArticleFromFavorites: (state, action: PayloadAction<Article>) => {
      const data = action.payload;
      const favoriteToRemove = state.favorites.findIndex((element) => {
        return element.id === data.id;
      });
      state.favorites.splice(favoriteToRemove, 1);
      const favoritesToStore = JSON.stringify(state.favorites);
      localStorage.setItem("storedFavorites", favoritesToStore);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  updateArticlesInSidebar,
  addArticleToFavorites,
  removeArticleFromFavorites,
  setActiveSidebarTab,
} = sidebarSlice.actions;

export default sidebarSlice.reducer;
