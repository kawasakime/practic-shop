import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ICartItem } from "../interfaces/components";

export interface CounterState {
  products: ICartItem[];
}

const initialState: CounterState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<ICartItem>) => {
      const element = state.products.find((e) => e.id === action.payload.id);
      console.log(element);
      !!element
        ? (state.products = state.products.map((e) =>
            e.id === action.payload.id ? { ...element, count: ++element.count } : e
          ))
        : state.products.push(action.payload);
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      const index = state.products.findIndex((item) => item.id === action.payload);

      state.products = [...state.products.slice(0, index), ...state.products.slice(index + 1)];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
