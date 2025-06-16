import { configureStore } from "@reduxjs/toolkit";
import useCart from "./useCart";
import useProducts from "./useProducts";
import useReview from "./useReview";
import useLove from "./useLove";

const store = configureStore({
  reducer: {
    product: useProducts,
    cart: useCart,
    review: useReview,
    love: useLove,
  },
});

export default store;
