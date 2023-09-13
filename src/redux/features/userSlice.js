import { createSlice } from "@reduxjs/toolkit";

//TODO - update state with userChoice for map search when they click user from the Results list - value will be the object location containing lat and lon
const initialState = {
  value: 0,
  location: {
    lat: 0,
    lon: 0,
  },
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;

// /*
// AUTH SLICE IS FOR BRUSHING UP ON REDUX TOOLKIT - AUTHENTICATION MAY BE ADDED VIA MONGODB
// PayloadAction is the TYPE - req for TypeScript
// */
// // import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { createSlice } from "@reduxjs/toolkit";

// // type InitialStateProps = {
// //   value: AuthStateType;
// // };

// // type AuthStateType = {
// //   isAuth: boolean;
// //   username: string;
// //   uid: string;
// //   isModerator: boolean;
// // };

// //The initial state of the auth slice - DEFAULT VALUES
// // const initialState = {
// //   value: {
// //     isAuth: false,
// //     username: "",
// //     uid: "",
// //     isModerator: false,
// //   } as AuthStateType,
// // } as InitialStateProps;

// export const auth = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     //Whenever a user clicks the 'logOut' button, the 'logOut' action is dispatched and we RESET the values to the initialState
//     logOut: () => {
//       return initialState;
//     },
//     logIn: (state, action) => {
//       return {
//         value: {
//           isAuth: true,
//           username: action.payload,
//           uid: "someuid",
//           isModerator: false,
//         },
//       };
//     },
//     // Sets the username to moderator by setting it to the opposite of what it is, by default we create user as non-moderator
//     toggleModerator: (state) => {
//       state.value.isModerator = !state.value.isModerator;
//     },
//   },
// });

// //Actions === reducers are the functions of the reducers - exported so that they can be used in other files
// export const { logIn, logOut, toggleModerator } = auth.actions;
// export default auth.reducer;
