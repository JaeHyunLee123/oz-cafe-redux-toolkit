import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addCartItem: (state, action) => {
      state.cart.push(action.payload);
    },
    removeCartItem: (state, action) => {
      const id = action.payload;
      console.log(id);
      state.cart = state.cart.filter((item) => item.id !== id);
    },
  },
});

export const { addCartItem, removeCartItem } = cartSlice.actions;

export default cartSlice.reducer;
