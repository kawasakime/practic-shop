import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IFilterSlice, IProductParams, TActiveCategoryFilter } from "../interfaces/components";

const initialState: IFilterSlice = {
  priceRange: [0, 99999],
  activeCategory: "all",
  params: [],
  search: "",
};

export const filterSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setPriceRange: (state, action: PayloadAction<[number, number]>) => {
      state.priceRange = action.payload;
    },
    setActiveCategory: (state, action: PayloadAction<TActiveCategoryFilter>) => {
      state.activeCategory = action.payload;
    },
    setParams: (state, action: PayloadAction<IProductParams[]>) => {
      state.params = action.payload;
    },
    resetValues: (state) => {
      state.priceRange = [0, 99999];
      state.activeCategory = "all";
      state.params = [];
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
});

export const { setPriceRange, setActiveCategory, setParams, resetValues, setSearch } =
  filterSlice.actions;
export default filterSlice.reducer;
