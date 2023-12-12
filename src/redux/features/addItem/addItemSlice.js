import { createSlice } from "@reduxjs/toolkit";

const addItemSlice = createSlice({
  name: "menu",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    },
  },
});

export const { addItem } = addItemSlice.actions;
export default addItemSlice.reducer;
