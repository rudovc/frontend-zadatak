import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export const homepageSlice = createSlice({
  name: "homepage",
  initialState: {
    nameFilter: "",
  },
  reducers: {
    updateFilter: (state, action: PayloadAction<string>) => {
      state.nameFilter = action.payload;
    },
  },
});

export const selectNameFilter = (state: RootState): string => {
  return state.homepage.nameFilter;
};

export const { updateFilter } = homepageSlice.actions;

export default homepageSlice.reducer;
