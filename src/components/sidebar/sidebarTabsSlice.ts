import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { SidebarTab } from "../tabEnums";

export const sidebarTabsSlice = createSlice({
  name: "activeSidebarTab",
  initialState: {
    value: SidebarTab.Latest,
  },
  reducers: {
    setActivesidebarTab: (state, action: PayloadAction<SidebarTab>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setActivesidebarTab } = sidebarTabsSlice.actions;

export const selectActivesidebarTab = (state: RootState) =>
  state.sidebarTabs.value;

export default sidebarTabsSlice.reducer;
