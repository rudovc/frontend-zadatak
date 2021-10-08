import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Article } from "./componentInterfaces";
import { SidebarTab } from "./tabEnums";
import { SidebarState } from "./sliceInterfaces";

const serialisedFavorites = localStorage.getItem("storedFavorites");
const loadedFavorites: Article[] =
  serialisedFavorites === null
    ? ([] as Article[])
    : JSON.parse(serialisedFavorites);

export const sidebarSlice = createSlice({
  name: "sidebarState",
  initialState: {
    articles: [] as Article[],
    favorites: loadedFavorites,
    activeTab: SidebarTab.Latest,
  },
  reducers: {
    setActiveSidebarTab: (state, action: PayloadAction<SidebarTab>) => {
      state.activeTab = action.payload;
    },
    updateArticlesInSidebar: (state, action: PayloadAction<Article[]>) => {
      state.articles = action.payload;
    },
    addArticleToFavorites: (state, action: PayloadAction<Article>) => {
      const favorite = action.payload;
      state.favorites.push(favorite);
      const favoritesToStore = JSON.stringify(state.favorites);
      localStorage.setItem("storedFavorites", favoritesToStore);
    },
    removeArticleFromFavorites: (state, action: PayloadAction<Article>) => {
      const favorite = action.payload;
      const favoriteToRemove = state.favorites.findIndex((element) => {
        return element === favorite;
      });
      state.favorites.splice(favoriteToRemove, 1);
      const favoritesToStore = JSON.stringify(state.favorites);
      localStorage.setItem("storedFavorites", favoritesToStore);
    },
  },
});

// Selectors
export const selectActiveSidebarTab = (state: SidebarState) => {
  return state.activeTab;
};

// Action creators are generated for each case reducer function
export const {
  updateArticlesInSidebar,
  addArticleToFavorites,
  removeArticleFromFavorites,
  setActiveSidebarTab,
} = sidebarSlice.actions;

export default sidebarSlice.reducer;
