import { configureStore } from "@reduxjs/toolkit";
import useCart from "./useCart";
import useProducts from "./useProducts";
import useReview from "./useReview";
import useLove from "./useLove";
import useUser from "./useUser";

const store = configureStore({
  reducer: {
    product: useProducts,
    cart: useCart,
    review: useReview,
    love: useLove,
    user: useUser,
  },
});

export default store;
