import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Article } from "./component-interfaces";
import { SidebarTab } from "./tab-enums";
import { RootState } from "../store";

const serialisedFavorites = localStorage.getItem("storedFavorites");
const loadedFavorites: string[] =
  serialisedFavorites === null
    ? ([] as string[])
    : JSON.parse(serialisedFavorites);

export const sidebarSlice = createSlice({
  name: "sidebarState",
  initialState: {
    favorites: loadedFavorites,
    activeTab: SidebarTab.Latest,
  },
  reducers: {
    setActiveSidebarTab: (state, action: PayloadAction<SidebarTab>) => {
      state.activeTab = action.payload;
    },
    addArticleToFavorites: (state, action: PayloadAction<Article>) => {
      const favorite = action.payload.id;
      state.favorites.push(favorite);
      const favoritesToStore = JSON.stringify(state.favorites);
      localStorage.setItem("storedFavorites", favoritesToStore);
    },
    removeArticleFromFavorites: (state, action: PayloadAction<Article>) => {
      const favorite = action.payload.id;
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
export const selectActiveSidebarTab = (state: RootState): SidebarTab => {
  return state.sidebar.activeTab;
};

export const selectFavoriteIDs = (state: RootState): string[] => {
  return state.sidebar.favorites;
};

// Action creators are generated for each case reducer function
export const {
  addArticleToFavorites,
  removeArticleFromFavorites,
  setActiveSidebarTab,
} = sidebarSlice.actions;

export default sidebarSlice.reducer;
