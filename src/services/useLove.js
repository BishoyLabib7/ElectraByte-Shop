import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};
const useLove = createSlice({
  name: "love",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    addLoveProduct: (state, action) => {
      const product = state.products.find((p) => p.id === action.payload.id);
      if (!product) {
        state.products.push({ ...action.payload });
      }
    },
    removeloveProduct: (state, action) => {
      state.products = state.products.filter((p) => p.id !== action.payload);
    },
  },
});

export const { setProducts, addLoveProduct, removeloveProduct } =
  useLove.actions;
export default useLove.reducer;
