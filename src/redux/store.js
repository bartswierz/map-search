// USED TO CREATE THE STORE THAT HOLDS ALL STATES AND VARIABLES
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
