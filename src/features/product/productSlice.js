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
  },
});

export const { AddToCart } = ProductSlice.actions;

export default ProductSlice.reducer;
