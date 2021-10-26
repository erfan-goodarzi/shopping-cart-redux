import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/product/productSlice';

export const store = configureStore({
  reducer: {
    Products: counterReducer,
  },
});