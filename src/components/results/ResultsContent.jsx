import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import PinIcon from "./PinIcon";
import {
  storeLocation,
  storeDescription,
  storeWebsite,
  storeImages,
  storeTraffic,
  storeName,
} from "../../redux/features/user/userSlice";

// setUserInputCallback -> Updates input field with store name onClick
// Displays results & updates our redux store when user clicks on a result
const ResultsContent = ({ list, setUserInputCallback }) => {
  const dispatch = useDispatch();
  console.log("list passed: ", list);

  const handleClick = (store) => {
    console.log("store.name: ", store.name);
    // setUserInput(store.name); // Update the input field with the store name
    setUserInputCallback(store.name); // Update the input field with the store name

    // UPDATE LOCATION TO CENTER MAP ON THE USER CHOICE
    let storeNameId = { name: store.name, id: store.id };
    dispatch(storeName(storeNameId)); //Alway given
    dispatch(storeLocation(store.location)); //
    dispatch(storeDescription(store.details?.description));

    // UPDATE DESCRIPTION FOR THE MODAL - IF STORE.DETAILS EXISTS & HAS A DESCRIPTION
    if (store.details?.description) dispatch(storeDescription(store.details.description));

    // // UPDATE IMAGES FOR THE MODAL - IF STORE.DETAILS EXISTS & HAS IMAGES
    if (store.details?.website) dispatch(storeWebsite(store.details.website));

    // UPDATE AVG Traffic FOR THE MODAL - IF STORE.DETAILS EXISTS & HAS avgTraffic
    if (store.details?.avgStoreTraffic) dispatch(storeTraffic(store.details.avgStoreTraffic));
    // else dispatch(storeTraffic({})); // If no traffic data exists, set to empty object

    // // UPDATE IMAGES FOR THE MODAL - IF STORE.DETAILS EXISTS & HAS IMAGES
    if (store.images) dispatch(storeImages(store.images));
  };

  return (
    <div className="bg-white">
      {list.map((store) => (
        <div
          key={store.id}
          // onClick={() => handleClick(store.location.lat, store.location.lon)}
          onClick={() => handleClick(store)}
          className="border-b border-r border-l border-gray-300 flex gap-4 p-2 hover:bg-slate-100 cursor-pointer px-3"
        >
          {/* ICON */}
          <PinIcon />

          {/* NAME & LOCATION */}
          <div>
            <h2 className="font-semibold text-gray-600">{store.name}</h2>
            <p className="text-gray-400">
              {store.location.lat}, {store.location.lon}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResultsContent;
