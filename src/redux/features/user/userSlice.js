import { createSlice } from "@reduxjs/toolkit";

// When user clicks on a Results List item, we will update the location state with the lat and lon of the selected item
//DEFAULT VALUES USED FROM THE INSTRUCTIONS - -34.397, 150.644
const initialState = {
  // value: 0,
  location: {
    // 42.3393909391653, -71.04683633624491
    // 42.34621118599097, -71.0429930645064
    // 42.346172931429194, -71.0395856066843
    lat: 42.346172931429194,
    lon: -71.0395856066843,
    // lat: 42.3393909391653,
    // lon: -71.04683633624491,
    // lat: 42.354022,
    // lon: -71.046245,
    // lat: -34.397,
    // lon: 150.644,
  },
  description: "Some text here",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateLocation: (state, action) => {
      // console.log("state location before: ", state.location);
      console.log("action.payload: ", action.payload);
      const { lat, lon } = action.payload;
      state.location.lat = lat; //updating state {lat = action.payload.lat, lon = action.payload.lon}
      state.location.lon = lon;
      console.log("\nUpdated state location: ", state.location);
    },
    updateDescription: (state, action) => {
      console.log("action.payload: ", action.payload);
      const { description } = action.payload;
      state.description = description;
    },
    // increment: (state) => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.value += 1;
    //   console.log("Updated state value: ", state.value);
    // },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
});

// Action creators are generated for each case reducer function
// export const { updateLocation, increment, decrement, incrementByAmount } = userSlice.actions;
export const { updateLocation } = userSlice.actions;

export default userSlice.reducer;
