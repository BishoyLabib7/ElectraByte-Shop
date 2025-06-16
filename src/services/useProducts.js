import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};
const useProducts = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = useProducts.actions;
export default useProducts.reducer;
