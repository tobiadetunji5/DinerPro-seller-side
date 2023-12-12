import { configureStore } from "@reduxjs/toolkit";
import cartReducer, {
  initializeCartFromCookies,
} from "./features/cart/cartSlice";
import modalReducer from "./features/modal/modalSlice";
import selectedItemReducer from "./features/selected_item/selectedItemSlice";
import addItemReducer from "./features/addItem/addItemSlice";
import editItemReducer from "./features/editItem/editItemSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
    selectedItem: selectedItemReducer,
    menu: addItemReducer,
    editItem: editItemReducer,
  },
});

(async () => {
  await store.dispatch(initializeCartFromCookies());
})();
