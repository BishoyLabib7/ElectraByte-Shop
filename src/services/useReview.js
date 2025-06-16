import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reviews: [],
};
const useReview = createSlice({
  name: "review",
  initialState,
  reducers: {
    setReviews: (state, action) => {
      state.reviews = action.payload;
    },
  },
});

export const { setReviews } = useReview.actions;
export default useReview.reducer;
