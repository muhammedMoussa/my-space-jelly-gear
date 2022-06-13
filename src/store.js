import { configureStore } from "@reduxjs/toolkit";
import { CartReducers } from "react-shop-cart";

export const store = configureStore({
  reducer: {
    cart: CartReducers,
  },
});
