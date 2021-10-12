import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import Category from "../category-enums";
import { CategoryTab } from "../tab-enums";

function isCategoryTab(arg: CategoryTab | Category): arg is CategoryTab {
  return Object.values(CategoryTab).includes(arg as CategoryTab);
}
function isCategory(arg: CategoryTab | Category): arg is Category {
  return Object.values(Category).includes(arg as Category);
}

export const categoryTabsSlice = createSlice({
  name: "activeCategoryTab",
  initialState: {
    value: CategoryTab.Home,
    categoryName: Category.Home,
  },
  reducers: {
    setActiveCategoryTab: (
      state,
      action: PayloadAction<CategoryTab | Category>
    ) => {
      if (isCategoryTab(action.payload)) {
        state.value = action.payload;
        const category = Object.entries(Category)[action.payload][1];
        state.categoryName = category;
      } else if (isCategory(action.payload)) {
        state.categoryName = action.payload;
        const categoryValue =
          CategoryTab[
            (action.payload.charAt(0).toUpperCase() +
              action.payload.slice(1)) as keyof typeof CategoryTab
          ];
        state.value = categoryValue;
      }
    },
  },
});

export const selectActiveCategory = (state: RootState) => {
  return state.categoryTabs.value;
};

export const selectActiveCategoryName = (state: RootState) => {
  return state.categoryTabs.categoryName;
};

// Action creators are generated for each case reducer function
export const { setActiveCategoryTab } = categoryTabsSlice.actions;

export default categoryTabsSlice.reducer;
