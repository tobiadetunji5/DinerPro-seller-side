import { configureStore } from "@reduxjs/toolkit";
import cartReducer, {
  initializeCartFromCookies,
} from "./features/cart/cartSlice";
import modalReducer from "./features/modal/modalSlice";
import selectedItemReducer from "./features/selected_item/selectedItemSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
    selectedItem: selectedItemReducer,
  },
});

(async () => {
  await store.dispatch(initializeCartFromCookies());
})();
