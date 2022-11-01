import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IFilterSlice, TActiveCategoryFilter, TPriceFilter } from "../interfaces/components";

const initialState: IFilterSlice = {
  priceRange: [0, 99999],
  activeCategory: "all",
};

export const filterSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setPriceRange: (state, action: PayloadAction<TPriceFilter>) => {
      state.priceRange = action.payload;
    },
    setActiveCategory: (state, action: PayloadAction<TActiveCategoryFilter>) => {
      state.activeCategory = action.payload;
    },
  },
});

export const { setPriceRange, setActiveCategory } = filterSlice.actions;
export default filterSlice.reducer;
