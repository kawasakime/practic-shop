import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./redux/cartSlice";
import filterSlice from "./redux/filterSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    filter: filterSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
