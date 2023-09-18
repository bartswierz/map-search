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
  userInput: "",
};

// Why did I separate the reducers into five separate reducers? I wanted to separate them to be able to create future features easier by separating the reducers into separate section to be more reusable when future features only pass one piece of data.
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Passing in the whole object from results click to update the store state to save us from having to make 7 different reducers to update each piece of data each time user chooses a result, this way only calls our redux store once
    updateStore: (state, action) => {
      const { name, id, location, details, images } = action.payload;
      console.log("REDUX: updateStore - action.payload: ", action.payload);

      // GUARANTEED VALUES - NAME AND ID
      state.name = name;
      state.id = id;

      // OPTIONAL VALUES
      // IF LOCATION OBJ. IS GIVEN, UPDATE LOCATION, ELSE DEFAULT VALUES TO RESET POSITION TO STARTING POINT - THERE MAY BE TIMES WHERE WE MAY HAVE PREVIOUS LOCATION'S COORDINATES IN OUR STORE SO WE RESET IT TO THE DEFAULT VALUES
      if (location) {
        // UPDATE LOCATION
        state.location.lat = location.lat;
        state.location.lon = location.lon;
      } else {
        // LOCATION NOT PROVIDED, SET TO DEFAULT
        state.location.lat = 42.34343568100882;
        state.location.lon = -71.04241761553008;
      }

      // UDPATING DESCRIPTION, WEBSITE, AND TRAFFIC TO THE VALUES IF GIVEN, OTHERWISE SET TO DEFAULT VALUES
      if (details) {
        if (details.description) {
          // UPDATE DESCRIPTION
          state.details.description = details.description;
        } else {
          // DESCRIPTION NOT PROVIDED, SET TO DEFAULT
          state.details.description = "";
        }

        // FIXING THE ISSUE OF THE WEBSITE NOT LOADING DUE TO MISSING WWW
        if (details.website) {
          // CREATE A NEW VARIABLE AND UPDATE THE WEBSITE STATE
          const url = details.website.split("https://")[1]; //"https://groundsignal.com" -> "groundsignal.com"

          const updatedLink = `https://www.${url}`;

          state.details.website = updatedLink;
        } else {
          // WEBSITE NOT PROVIDED, SET TO DEFAULT
          state.details.website = "";
        }

        if (details.avgStoreTraffic) state.details.avgStoreTraffic = details.avgStoreTraffic; // UPDATE AVGTRAFFIC
        else state.details.avgStoreTraffic = {}; //TRAFFIC NOT PROVIDED, SET TO DEFAULT
      } else {
        // No details set all three to default values
        console.log("details did not exist setting values to default");
        state.details.description = "";
        state.details.avgStoreTraffic = {};
        state.details.website = "";
      }

      if (images) state.images = images;
      else state.images = [];
    },
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
      state.details.avgStoreTraffic = action.payload;
    },
    storeWebsite: (state, action) => {
      //  removes https:// to fix the issue of the website not loading due to missing www
      let url = action.payload.split("https://")[1]; //"https://groundsignal.com" -> "groundsignal.com"

      state.details.website = url;
    },
    storeImages: (state, action) => {
      //Destructuring the array of three images [image1, image2, image3] incase we want to add more or less images in the future
      const [...images] = action.payload; // images = [image1, image2, image3]

      action.payload ? (state.images = images) : (state.images = []);
    },
  },
});

// Action creators are generated for each case reducer function
export const { storeLocation, storeDescription, storeTraffic, storeWebsite, storeImages, storeName, updateStore } = userSlice.actions;

// Selector to give our modal access to the entire store state as it is required for the modal to function properly. Other component will only use the useSelector hook to access the store state
export const selectStore = (state) => state.user;

export default userSlice.reducer;
