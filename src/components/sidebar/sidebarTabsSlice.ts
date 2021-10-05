import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { CategoryTab } from "../tabEnums";

export const categoryTabsSlice = createSlice({
  name: "activeCategoryTab",
  initialState: {
    value: CategoryTab.Business,
  },
  reducers: {
    setActiveCategoryTab: (state, action: PayloadAction<CategoryTab>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setActiveCategoryTab } = categoryTabsSlice.actions;

export const selectActiveCategoryTab = (state: RootState) =>
  state.categoryTabs.value;

export default categoryTabsSlice.reducer;
