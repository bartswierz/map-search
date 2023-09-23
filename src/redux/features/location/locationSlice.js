import { createSlice } from "@reduxjs/toolkit";

//DEFAULT VALUES
const initialState = {
  id: null,
  name: "",
  geolocation: {
    lat: 56.94062,
    lon: -133.61918,
  },
  details: {
    description: "",
    website: "",
    address: "",
    avgStoreTraffic: {},
  },
  images: [],
  userInput: "",
};

// userSlice is setup for updating store objects via updateStore(when user clicks on a result item), and for updating individual values for future features.
export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    // Passing in the whole object from results click to update the store state to save us from having to make 7 different reducers to update each piece of data each time user chooses a result, this way only calls our redux store once
    updateStore: (state, action) => {
      const { name, id, geolocation, details, images } = action.payload;
      const { description, website, address, avgStoreTraffic } = details;
      console.log("geolocation: ", geolocation);
      // GUARANTEED VALUES - NAME AND ID
      state.name = name;
      state.id = id;

      // OPTIONAL VALUES
      // IF LOCATION OBJ. IS GIVEN, UPDATE LOCATION, ELSE DEFAULT VALUES TO RESET POSITION TO STARTING POINT - THERE MAY BE TIMES WHERE WE MAY HAVE PREVIOUS LOCATION'S COORDINATES IN OUR STORE SO WE RESET IT TO THE DEFAULT VALUES
      if (geolocation) {
        // UPDATE LOCATION
        state.geolocation.lat = geolocation.lat;
        state.geolocation.lon = geolocation.lon;
      } else {
        // LOCATION NOT PROVIDED, SET TO DEFAULT
        state.geolocation.lat = 41.88260909084107;
        state.geolocation.lon = -87.62254314668812;
      }

      if (images) state.images = images;
      else state.images = [];

      // UDPATING DESCRIPTION, WEBSITE, AND TRAFFIC TO THE VALUES IF GIVEN, OTHERWISE SET TO DEFAULT VALUES
      if (details) {
        // UPDATE DESCRIPTION IF GIVEN, OTHERWISE SET TO DEFAULT
        if (description) state.details.description = description;
        else state.details.description = "";

        // FIXING THE ISSUE OF THE WEBSITE NOT LOADING DUE TO MISSING WWW
        if (website) state.details.website = details.website;
        else state.details.website = "";

        if (avgStoreTraffic) state.details.avgStoreTraffic = avgStoreTraffic; // UPDATE AVGTRAFFIC
        else state.details.avgStoreTraffic = {}; //TRAFFIC NOT PROVIDED, SET TO DEFAULT

        if (address) state.details.address = address;
        else state.details.address = "";
      } else {
        // No details set all property values to default - this will reset previous values to default if user clicks on a result that does not have a description, website, address, or traffic data
        state.details.description = "";
        state.details.website = "";
        state.details.address = "";
        state.details.avgStoreTraffic = {};
      }
    },
    // updateStore: (state, action) => {
    //   const { name, id, geolocation, details, images } = action.payload;
    //   console.log("geolocation: ", geolocation);
    //   // GUARANTEED VALUES - NAME AND ID
    //   state.name = name;
    //   state.id = id;

    //   // OPTIONAL VALUES
    //   // IF LOCATION OBJ. IS GIVEN, UPDATE LOCATION, ELSE DEFAULT VALUES TO RESET POSITION TO STARTING POINT - THERE MAY BE TIMES WHERE WE MAY HAVE PREVIOUS LOCATION'S COORDINATES IN OUR STORE SO WE RESET IT TO THE DEFAULT VALUES
    //   if (geolocation) {
    //     // UPDATE LOCATION
    //     state.geolocation.lat = geolocation.lat;
    //     state.geolocation.lon = geolocation.lon;
    //   } else {
    //     // LOCATION NOT PROVIDED, SET TO DEFAULT
    //     state.geolocation.lat = 41.88260909084107;
    //     state.geolocation.lon = -87.62254314668812;
    //   }

    //   // UDPATING DESCRIPTION, WEBSITE, AND TRAFFIC TO THE VALUES IF GIVEN, OTHERWISE SET TO DEFAULT VALUES
    //   if (details) {
    //     if (details.description) {
    //       // UPDATE DESCRIPTION
    //       state.details.description = details.description;
    //     } else {
    //       // DESCRIPTION NOT PROVIDED, SET TO DEFAULT
    //       state.details.description = "";
    //     }

    //     // FIXING THE ISSUE OF THE WEBSITE NOT LOADING DUE TO MISSING WWW
    //     if (details.website) {
    //       // CREATE A NEW VARIABLE AND UPDATE THE WEBSITE STATE
    //       // const url = details.website.split("https://")[1]; //"https://groundsignal.com" -> "groundsignal.com"

    //       // const updatedLink = `https://www.${url}`;

    //       // state.details.website = updatedLink;
    //       state.details.website = details.website;
    //     } else {
    //       // WEBSITE NOT PROVIDED, SET TO DEFAULT
    //       state.details.website = "";
    //     }

    //     if (details.avgStoreTraffic) state.details.avgStoreTraffic = details.avgStoreTraffic; // UPDATE AVGTRAFFIC
    //     else state.details.avgStoreTraffic = {}; //TRAFFIC NOT PROVIDED, SET TO DEFAULT
    //   } else {
    //     // No details set all three to default values
    //     state.details.description = "";
    //     state.details.avgStoreTraffic = {};
    //     state.details.website = "";
    //   }

    //   if (images) state.images = images;
    //   else state.images = [];
    // },
    locationName: (state, action) => {
      //Guaranteed to have a name and id as per the instructions
      const { name, id } = action.payload;
      state.name = name;
      state.id = id;
    },
    locationCoordinates: (state, action) => {
      const { lat, lon } = action.payload; // location = {lat, lon}
      if (lat && lon) {
        state.geolocation.lat = lat;
        state.geolocation.lon = lon;
      } else {
        state.geolocation.lat = 41.88260909084107;
        state.geolocation.lon = -87.62254314668812;
      }
    },
    locationDescription: (state, action) => {
      const { description } = action.payload;

      if (description) state.details.description = description;
      else state.details.description = "";
    },
    locationTraffic: (state, action) => {
      const { avgStoreTraffic } = action.payload;

      if (avgStoreTraffic) state.details.avgStoreTraffic = avgStoreTraffic;
      else state.details.avgStoreTraffic = {};
    },
    locationWebsite: (state, action) => {
      const { website } = action.payload;
      if (website) {
        //  removes https:// to fix the issue of the website not loading due to missing www
        const url = website.split("https://")[1]; //"https://groundsignal.com" -> "groundsignal.com"

        const updatedLink = `https://www.${url}`;

        state.details.website = updatedLink;
      } else state.details.website = "";
    },
    locationImages: (state, action) => {
      //Destructuring the array of three images [image1, image2, image3] incase we want to add more or less images in the future
      const [...images] = action.payload; // images = [image1, image2, image3]

      action.payload ? (state.images = images) : (state.images = []);
    },
  },
});

// Action creators are generated for each case reducer function
export const { storeLocation, storeDescription, storeTraffic, storeWebsite, storeImages, storeName, updateStore } =
  locationSlice.actions;

// Selector to give our modal access to the entire store state as it is required for the modal to function properly. Other component will only use the useSelector hook to access the store state
export const selectStore = (state) => state.location;

export default locationSlice.reducer;
