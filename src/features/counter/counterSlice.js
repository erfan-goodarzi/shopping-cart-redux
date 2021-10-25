import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCount } from "./counterAPI";

const initialState = {
  value: 2,
  product: [
    {
      title: null,
      img: null,
      price: null,
    },
  ],
};

export const incrementAsync = createAsyncThunk(
  "counter/fetchCount",
  async (amount) => {
    const response = await fetchCount(amount);

    return response.data;
  }
);

export const counterSlice = createSlice({
  name: "AddProduct",
  initialState,
  reducers: {
    AddToCart: (state, action) => {
      state.value += 1;
      state.product = action.payload;
    },
  },
});

export const { AddToCart } = counterSlice.actions;

export default counterSlice.reducer;
