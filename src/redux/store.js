// USED TO CREATE THE STORE THAT HOLDS ALL STATES AND VARIABLES
import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./features/counter/counterSlice";
import userReducer from "./features/user/userSlice";

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    user: userReducer,
  },
});
