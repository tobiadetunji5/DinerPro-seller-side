import { createSlice } from "@reduxjs/toolkit";
import { setCookie, getCookie, removeCookie } from "../../../../cookieService";
// import { cookies } from "next/dist/client/components/headers";

const initialMenuData = getCookie("menu");
const initialMenuState = initialMenuData ? JSON.parse(initialMenuData) : [];

const initialState = [...initialMenuState];

const addMenuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    addMenu: (state, action) => {
      state.push(action.payload);
      setCookie("menuData", JSON.stringify(state));
    },
    editMenu: (state, action) => {
      const {
        id,
        itemName,
        category,
        price,
        available,
        selectedPicture,
        batchid,
        procurementid,
      } = action.payload;

      const updatedState = state.map((menu) => {
        if (menu.id === id) {
          return {
            ...menu,
            itemName,
            category,
            price,
            available,
            selectedPicture,
            batchid,
            procurementid,
          };
        }
        return menu;
      });

      setCookie("menuData", JSON.stringify(updatedState));
      return updatedState;
    },

    deleteMenu: (state, action) => {
      const { id } = action.payload;
      const updatedState = state.filter((item) => item.id !== id);
      // setCookie("menuData", JSON.stringify(updatedState));
      if (updatedState.length === 0) {
        removeCookie("menuData");
      } else {
        setCookie("menuData", JSON.stringify(updatedState));
      }
      return updatedState;
    },

    initializeMenuFromCookies(state) {
      const menuDataFromCookies = getCookie("menu");
      if (menuDataFromCookies) {
        try {
          const parsedMenuData = JSON.parse(menuDataFromCookies);
          Object.assign(state, parsedMenuData);
        } catch (error) {
          console.log("Error  parsing menu date from cookies", error);
        }
      }
    },
  },
});

export const { addMenu, editMenu, deleteMenu, initializeMenuFromCookies } =
  addMenuSlice.actions;
export default addMenuSlice.reducer;
