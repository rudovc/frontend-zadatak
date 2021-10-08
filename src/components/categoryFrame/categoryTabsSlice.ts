import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Category from "../categoryEnums";
import { CategoryTab } from "../tabEnums";

export const categoryTabsSlice = createSlice({
  name: "activeCategoryTab",
  initialState: {
    value: CategoryTab.Home,
    categoryName: Category.Home,
  },
  reducers: {
    setActiveCategoryTab: (state, action: PayloadAction<CategoryTab>) => {
      state.value = action.payload;
      const category = Object.entries(Category)[action.payload][1];
      state.categoryName = category;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setActiveCategoryTab } = categoryTabsSlice.actions;

export default categoryTabsSlice.reducer;
