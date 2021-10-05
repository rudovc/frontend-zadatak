import { createSlice } from "@reduxjs/toolkit";

export const categoryTabsSlice = createSlice({
  name: "activeCategoryTab",
  initialState: {
    value: 0,
  },
  reducers: {
    setActiveCategoryTab: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
    },
  },
});

// Action creators are generated for each case reducer function
export const { setActiveCategoryTab } = categoryTabsSlice.actions;

export default categoryTabsSlice.reducer;
