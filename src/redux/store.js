// USED TO CREATE THE STORE THAT HOLDS ALL STATES AND VARIABLES
import { configureStore } from "@reduxjs/toolkit";
import locationReducer from "./features/location/locationSlice";

export const store = configureStore({
  reducer: {
    location: locationReducer,
  },
});
