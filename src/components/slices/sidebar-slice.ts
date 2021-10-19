import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Article } from "../../interfaces/data-interfaces";
import { RootState } from "../../store";

const serialisedFavorites = localStorage.getItem("storedFavorites");
const loadedFavorites: string[] =
  serialisedFavorites === null
    ? ([] as string[])
    : JSON.parse(serialisedFavorites);

export const sidebarSlice = createSlice({
  name: "sidebarState",
  initialState: {
    favorites: loadedFavorites,
  },
  reducers: {
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

export const selectFavoriteIDs = (state: RootState): string[] => {
  return state.sidebar.favorites;
};

// Action creators are generated for each case reducer function
export const { addArticleToFavorites, removeArticleFromFavorites } =
  sidebarSlice.actions;

export default sidebarSlice.reducer;
