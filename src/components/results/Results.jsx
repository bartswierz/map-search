// import { useState, useEffect } from "react";
// import IconPin from "../assets/icon-pin.svg";
// import "../assets/icon-pin.svg";
// import "../assets/icon-search.svg";
import PinIcon from "../icons/PinIcon";
// import { Counter } from "../redux/features/counter/Counter";
// import { useSelector, useDispatch } from "react-redux";
import { useDispatch } from "react-redux";
import {
  storeLocation,
  storeDescription,
  storeWebsite,
  storeImages,
  storeTraffic,
  storeName,
} from "../../redux/features/user/userSlice";

const Results = ({ filteredList, userInput, setUserInput, resultsList }) => {
  const dispatch = useDispatch();

  console.log("resultsList: ", resultsList);

  // Dispatch values to our redux store when user clicks on a result
  const handleClick = (store) => {
    setUserInput(store.name); // Update the input field with the store name

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

  // Empty results -> no matches OR no user input
  if (!resultsList) {
    return null;
  }

  // TODO - swap to check if it it an empty object
  // Prevents 'no results' displaying when user input is empty
  // if (userInput.length === 0) return null;

  return (
    <div className="text-sm h-max max-w-[500px] border border-[#bdbdbd] shadow-sm shadow-[#bdbdbd] rounded-[4px] overflow-hidden">
      {/* HEADER */}
      <h2
        className={`p-3 font-semibold text-white shadow-md shadow-[#bdbdbd]
        ${resultsList.length === 0 ? "bg-gray-500" : "bg-blue-500"}`}
      >
        {resultsList.length === 0 ? (
          <span>No results found</span>
        ) : (
          <span>
            Found {resultsList.length} {resultsList.length > 1 ? "Results:" : "Result:"}
          </span>
        )}
      </h2>

      {/* RESULTS */}
      <div className="bg-white">
        {resultsList.map((store) => (
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
    </div>
  );
};

export default Results;
