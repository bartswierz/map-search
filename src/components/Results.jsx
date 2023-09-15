// import { useState, useEffect } from "react";
// import IconPin from "../assets/icon-pin.svg";
import "../assets/icon-pin.svg";
import "../assets/icon-search.svg";
// import { Counter } from "../redux/features/counter/Counter";
// import { useSelector, useDispatch } from "react-redux";
import { useDispatch } from "react-redux";
import { storeLocation, storeDescription, storeWebsite, storeImages, storeTraffic, storeName } from "../redux/features/user/userSlice";

/* eslint-disable react/prop-types */
const Results = ({ filteredList }) => {
  const dispatch = useDispatch();

  // The idea was to separate the values as all but id, name, and location are optional to help with resusability as some future updates may only need a single piece of data. I also wanted to check for the existence of the data before dispatching it to the store as it related to the UI rendering.
  const handleClick = (store) => {
    // console.log("Dispatch update store values: ", store);
    // console.log("traffic: ", store.details); //undefined
    // console.log("traffic: ", store.details.avgStoreTraffic); //undefined
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
    else dispatch(storeTraffic({})); // If no traffic data exists, set to empty object

    // // UPDATE IMAGES FOR THE MODAL - IF STORE.DETAILS EXISTS & HAS IMAGES
    if (store.images) dispatch(storeImages(store.images));
  };

  if (!filteredList) {
    return null;
  }

  return (
    <div className="text-sm h-max max-w-[500px] border border-[#bdbdbd] shadow-md shadow-[#bdbdbd]">
      {/* HEADER */}
      <h2
        className={`p-3 font-semibold text-white shadow-md shadow-[#bdbdbd]
        ${filteredList.length === 0 ? "bg-gray-500" : "bg-blue-500"}`}
      >
        {filteredList.length === 0 ? (
          <span>No results found...</span>
        ) : (
          <span>
            Found {filteredList.length} {filteredList.length > 1 ? "Results:" : "Result:"}
          </span>
        )}
      </h2>

      {/* RESULTS */}
      <div className="bg-white">
        {filteredList.map((store) => (
          <div
            key={store.id}
            // onClick={() => handleClick(store.location.lat, store.location.lon)}
            onClick={() => handleClick(store)}
            className="border-b border-r border-l border-gray-300 flex gap-4 p-2 hover:bg-slate-100 cursor-pointer px-3"
          >
            {/* ICON */}
            <div className="flex items-center">
              <div className="text-primary-color ">
                <svg width="30" height="30" viewBox="0 0 11 14" xmlns="http://www.w3.org/2000/svg" className="text-primary-color">
                  <path
                    d="M5.49 0A5.496 5.496 0 0 0 0 5.49c0 2.08 1.412 4.261 2.596 5.724.97 1.197 2.54 2.768 2.886 2.797l.051.003c.37 0 2.002-1.69 2.88-2.786 1.17-1.461 2.567-3.644 2.567-5.738A5.496 5.496 0 0 0 5.49 0zm0 8.546a3.147 3.147 0 1 1-.001-6.293 3.147 3.147 0 0 1 0 6.293z"
                    fill="currentColor" // uses the text-primary-color from tailwind.config.js
                  />
                </svg>
              </div>
            </div>

            {/* NAME & LOCATION */}
            <div>
              <div className="font-semibold text-[#666]">{store.name}</div>
              <div className="text-gray-400">
                {store.location.lat}, {store.location.lon}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Results;
