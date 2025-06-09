import { createSlice } from "@reduxjs/toolkit";
import data from "../assets/data";

export const menuSlice = createSlice({
  name: "menu",
  initialState: {
    menu: data.menu,
  },
});

export default menuSlice.reducer;
