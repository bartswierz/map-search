import { createSlice } from "@reduxjs/toolkit";

// When user clicks on a Results List item, we will update the location state with the lat and lon of the selected item
//DEFAULT VALUES USED FROM THE INSTRUCTIONS - -34.397, 150.644
const initialState = {
  id: null,
  name: "",
  location: {
    lat: 42.34343568100882,
    lon: -71.04241761553008,
  },
  details: {
    description: "",
    website: "",
    avgStoreTraffic: {},
  },
  images: [],
};

// Why did I separate the reducers into five separate reducers? I wanted to separate them to be able to create future features easier by separating the reducers into separate section to be more reusable when future features only require a specific piece of data. For example, if I wanted to use the storeLocation reducer in another component, I could just import it and use it. This way, I believe it would be easier to maintain this code by modularizing it.
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    storeName: (state, action) => {
      // console.log("Name - action.payload: ", action.payload);
      const { name, id } = action.payload;
      state.name = name;
      state.id = id;
    },
    storeLocation: (state, action) => {
      // console.log("Location - action.payload: ", action.payload);
      const { lat, lon } = action.payload; // location = {lat, lon}
      state.location.lat = lat;
      state.location.lon = lon;
    },
    storeDescription: (state, action) => {
      // console.log("description: ", action.payload);
      state.details.description = action.payload;
    },
    storeTraffic: (state, action) => {
      console.log("Traffic - action.payload: ", action.payload);
      // const { avgStoreTraffic } = action.payload;
      // action.payload ? (state.avgStoreTraffic = action.payload) : (state.avgStoreTraffic = {});
      state.details.avgStoreTraffic = action.payload;
    },
    storeWebsite: (state, action) => {
      console.log("Website - action.payload: ", action.payload);

      //  removes https:// to fix the issue of the website not loading due to missing www
      let url = action.payload.split("https://")[1]; //"https://groundsignal.com" -> "groundsignal.com"

      state.details.website = url;
    },
    storeImages: (state, action) => {
      //Destructuring the array of three images [image1, image2, image3] into our state so that we can use the array methods on it
      const [...images] = action.payload; // images = [image1, image2, image3]

      action.payload ? (state.images = images) : (state.images = []);
    },
  },
});

// Action creators are generated for each case reducer function
export const { storeLocation, storeDescription, storeTraffic, storeWebsite, storeImages, storeName } = userSlice.actions;

// Selector to get the ENTIRE store object for modal
export const selectStore = (state) => state.user;

export default userSlice.reducer;
