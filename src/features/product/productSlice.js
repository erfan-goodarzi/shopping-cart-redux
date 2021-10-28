import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  product: [],
};

export const ProductSlice = createSlice({
  name: "AddProduct",
  initialState,
  reducers: {
    AddToCart: (state, action) => {
      state.value += 1;
      state.product.push(action.payload);
    },
    RemoveFromCart: (state, action) => {
      const index = state.product.map((it) => it.id).indexOf(action.payload);
      if (index > -1) {
        state.product.splice(index, 1);
        state.value -= 1;
      }
    },
  },
});

export const { AddToCart, RemoveFromCart } = ProductSlice.actions;

export default ProductSlice.reducer;
