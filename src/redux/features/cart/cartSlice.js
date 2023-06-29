import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.slug === newItem.slug
      );
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.priceTag * existingItem.quantity;
      } else {
        state.cartItems.push({
          slug: newItem.slug,
          priceTag: newItem.priceTag,
          quantity: 1,
          totalPrice: newItem.priceTag,
          foodName: newItem.foodName,
          imageUrl: newItem.imageUrl,
        });
      }
      state.amount++;
      state.total = state.cartItems.reduce(
        (total, item) => total + item.totalPrice,
        0
      );
    },
    increaseQuantity(state, action) {
      const { slug } = action.payload;
      const item = state.cartItems.find((item) => item.slug === slug);
      if (item) {
        item.quantity++;
        item.totalPrice = item.priceTag * item.quantity;
        state.amount++;
        state.total = state.cartItems.reduce(
          (total, item) => total + item.totalPrice,
          0
        );
      }
    },
    decreaseQuantity(state, action) {
      const { slug } = action.payload;
      const item = state.cartItems.find((item) => item.slug === slug);
      if (item) {
        item.quantity--;
        item.totalPrice = item.priceTag * item.quantity;
        state.amount--;
        state.total = state.cartItems.reduce(
          (total, item) => total + item.totalPrice,
          0
        );
        if (item.quantity === 0) {
          state.cartItems = state.cartItems.filter(
            (item) => item.slug !== slug
          );
        }
      }
    },
    deleteItem(state, action) {
      const { slug } = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.slug !== slug);
    },
  },
});

export const { addToCart, deleteItem, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
