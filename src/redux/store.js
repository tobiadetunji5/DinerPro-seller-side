import { configureStore } from "@reduxjs/toolkit";
import cartReducer, {
  initializeCartFromCookies,
} from "./features/cart/cartSlice";
import modalReducer from "./features/modal/modalSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
  },
});

(async () => {
  await store.dispatch(initializeCartFromCookies());
})();
