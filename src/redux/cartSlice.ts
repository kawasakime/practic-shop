import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ICartItem } from "../interfaces/components";

export interface ICartSlice {
  products: ICartItem[];
}

const initialState: ICartSlice = {
  products: !!localStorage.getItem("cart")
    ? (JSON.parse(localStorage.getItem("cart") || "") as ICartItem[])
    : [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<ICartItem>) => {
      const element = state.products.find(
        (item) => item.id === action.payload.id
      );
      !!element
        ? state.products.map((item) =>
            item.id === action.payload.id
              ? { ...element, count: ++element.count }
              : item
          )
        : state.products.push(action.payload);
    },
    removeOneProduct: (state, action: PayloadAction<number>) => {
      state.products.map((item) =>
        item.id === action.payload ? --item.count : item
      );
    },
    removeAllProducts: (state, action: PayloadAction<number>) => {
      const index = state.products.findIndex(
        (item) => item.id === action.payload
      );

      state.products = [
        ...state.products.slice(0, index),
        ...state.products.slice(index + 1),
      ];
    },
  },
});

export const { addProduct, removeAllProducts, removeOneProduct } =
  cartSlice.actions;
export default cartSlice.reducer;
