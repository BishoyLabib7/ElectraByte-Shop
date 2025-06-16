import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};
const useCart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartProducts: (state, action) => {
      state.products = action.payload;
    },
    addCartProduct: (state, action) => {
      const product = state.products.find((p) => p.id === action.payload.id);
      if (product) {
        product.quantity = (product.quantity || 0) + 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
    },
    removeCartProduct: (state, action) => {
      state.products = state.products.filter((p) => p.id !== action.payload);
    },
    decreaseQuantity: (state, action) => {
      const product = state.products.find((p) => p.id === action.payload);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
      } else if (product && product.quantity === 1) {
        state.products = state.products.filter((p) => p.id !== action.payload);
      }
    },
    increaseQuantity: (state, action) => {
      const product = state.products.find((p) => p.id === action.payload);
      if (product) {
        product.quantity = (product.quantity || 0) + 1;
      }
    },
  },
});

export const {
  setCartProducts,
  addCartProduct,
  removeCartProduct,
  decreaseQuantity,
  increaseQuantity,
} = useCart.actions;
export default useCart.reducer;
