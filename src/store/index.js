import uiSlice from "./ui-slice";
import cartSlice from "./cart-slice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: { cart: cartSlice.reducer, ui: uiSlice.reducer },
});

export default store;
