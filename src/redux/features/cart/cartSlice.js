import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const cartFromCookies = Cookies.get("cart");
const initialCartState = cartFromCookies
  ? JSON.parse(cartFromCookies)
  : {
      cartItems: [],
      amount: 0,
      total: 0,
    };
const initialState = { ...initialCartState };
// const initialState = {
//   cart: Cookies.get("cart")
//     ? JSON.parse(Cookies.get("cart"))
//     : {
//         cartItems: [],
//         amount: 0,
//         total: 0,
//       },
// };

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
      // Update cookies
      const updatedCart = {
        cartItems: state.cartItems,
        amount: state.amount,
        total: state.total,
      };
      Cookies.set("cart", JSON.stringify(updatedCart));
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
      // Update cookies
      const updatedCart = {
        cartItems: state.cartItems,
        amount: state.amount,
        total: state.total,
      };
      Cookies.set("cart", JSON.stringify(updatedCart));
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
      // Update cookies
      const updatedCart = {
        cartItems: state.cartItems,
        amount: state.amount,
        total: state.total,
      };
      Cookies.set("cart", JSON.stringify(updatedCart));
    },
    deleteItem(state, action) {
      const { slug } = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.slug !== slug);
      // Update cookies
      const updatedCart = {
        cartItems: state.cartItems,
        amount: state.amount,
        total: state.total,
      };
      Cookies.set("cart", JSON.stringify(updatedCart));
    },
    clearCart(state) {
      state.cartItems = [];
      state.amount = 0;
      state.total = 0;
      Cookies.remove("cart");
    },

    initializeCartFromCookies(state) {
      const cartDataFromCookies = Cookies.get("cart");
      if (cartDataFromCookies) {
        try {
          const parsedCartData = JSON.parse(cartDataFromCookies);
          Object.assign(state, parsedCartData);
        } catch (error) {
          console.error("Error parsing cart data from cookies:", error);
        }
      }
    },
  },
});

export const {
  addToCart,
  deleteItem,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
  initializeCartFromCookies,
} = cartSlice.actions;

export default cartSlice.reducer;
