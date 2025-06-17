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
    setProductFeedback: (state, action) => {
      // action.payload: { id, feedbacks }
      const { id, feedbacks } = action.payload;
      const product = state.products.find((p) => p.id == id);
      if (product) {
        product.feedbacks = feedbacks;
      }
    },
  },
});

export const { setProducts, setProductFeedback } = useProducts.actions;
export default useProducts.reducer;
