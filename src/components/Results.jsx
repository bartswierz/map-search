// import { useState, useEffect } from "react";
// import IconPin from "../assets/icon-pin.svg";
import "../assets/icon-pin.svg";
import "../assets/icon-search.svg";
// import { Counter } from "../redux/features/counter/Counter";
// import { useSelector, useDispatch } from "react-redux";
import { useDispatch } from "react-redux";
import { updateLocation } from "../redux/features/user/userSlice";
/* eslint-disable react/prop-types */
const Results = ({ filteredList }) => {
  const dispatch = useDispatch();

  // console.log("filteredList: ", filteredList);

  const handleClick = (latitude, longitude) => {
    console.log("handleClick - dispatch updateLocation: latitude", latitude, ",", "longitude: ", longitude);
    // TODO - update location state in our redux store

    // dispatch(updateLocation({ lat: location.lat, lon: location.lon }));
    // TODO - pass the user choice for location
    dispatch(updateLocation({ lat: latitude, lon: longitude }));
  };

  if (!filteredList) {
    return null;
  }

  return (
    <div className="text-sm h-max max-w-[400px]">
      {/* HEADER */}
      <h2
        className={`p-3 font-semibold text-white 
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
        {/* {results.map(({ id, name, location }) => ( */}
        {filteredList.map(({ id, name, location }) => (
          <div
            key={id}
            onClick={() => handleClick(location.lat, location.lon)}
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

            {/* TODO - add redux onClick - set that lat/long as a marker on the map inside APP */}
            {/* NAME & LOCATION */}
            {/* <div onClick={() => handleClick(location.lat, location.lon)}> */}
            <div>
              <div className="font-semibold">{name}</div>
              <div className="text-gray-400">
                {location.lat}, {location.lon}
              </div>
            </div>
          </div>
        ))}
        {/* FOR TESTING PURPOSES */}
        {/* <Counter /> */}
      </div>
    </div>
  );
};

export default Results;
