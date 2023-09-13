// import { useState, useEffect } from "react";
/* eslint-disable react/prop-types */
const Results = ({ filteredList }) => {
  console.log("filteredList PASSED: ", filteredList);

  if (!filteredList || filteredList.length === 0) {
    return null;
  }

  return (
    <div className="bg-blue-500  text-lg font-semibold h-max max-w-[400px]">
      {/* HEADER */}
      <h2 className="p-3 ">
        {filteredList.length === 0 ? (
          "No results found..."
        ) : (
          <span className="text-semibold text-white">{filteredList.length} Results Found:</span>
        )}
      </h2>

      {/* RESULTS */}
      <div className="bg-white">
        {/* {results.map(({ id, name, location }) => ( */}
        {filteredList.map(({ id, name, location }) => (
          <div key={id} className="border border-blue-900 flex gap-4 p-2">
            {/* ICON */}
            <div className="max-w-[64px] max-h-[64px] border">
              <img src="../assets/icon-pin.svg" alt="icon" className="w-full h-full p-1 object-contain" />
            </div>

            {/* NAME & LOCATION */}
            <div className="border">
              <div>{name}</div>
              <div>
                {location.lat}, {location.lon}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Results;
