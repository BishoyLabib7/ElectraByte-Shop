import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};
const useUser = createSlice({
  name: "user",
  initialState,
  reducers: {
    register: (state, action) => {
      state.user = action.payload;
    },
    login: (state, action) => {
      const email = state.user.find(
        (user) => user.email === action.payload.email
      );
      const password = state.user.find(
        (user) => user.password === action.payload.password
      );

      if (email && password) {
        state.user.valid = true;
      }
    },
    logout: (state) => {
      state.user = {};
    },
  },
});

export const { register, login, logout } = useUser.actions;
export default useUser.reducer;
