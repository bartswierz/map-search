import { useState } from "react";
import ReactLeafletGoogleLayer from "react-leaflet-google-layer";
import { FaRoad, FaHiking } from "react-icons/fa";
import { GiTrail } from "react-icons/gi";
const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
/*
 * TODO - make a button that will toggle the map type
 * Create a button, when clicked we will expand it to show all 4, after it is clicked we will go back to hiding the options
 */
const MapLayer = () => {
  const [mapType, setMapType] = useState("hybrid");

  // TODO - add white background - rounded corners for the background and for the two buttons
  const MapButton = ({ text }) => {
    const iconType =
      text === "hybrid" ? (
        // <GiTrail className="text-xl" size={48} color={"gray"} />
        <GiTrail className="text-xl" size={48} />
      ) : (
        // <FaRoad className="text-xl" size={48} color={"gray"} />
        <FaRoad className="text-xl" size={48} />
      );

    return (
      <div
        // className={`${mapType === text ? "border-white-" : null} flex flex-col w-[64px] cursor-pointer hover:bg-blue-500`}
        className={`group flex flex-col w-[64px] cursor-pointer hover:text-gray-900`}
        onClick={() => setMapType(`${text}`)}
      >
        {/* <div className="b w-full h-[80%]">Image</div> */}
        <div className="border-2 border-gray-900 transition-all rounded-md flex justify-center items-center p-1 group-hover:text-gray-900 shadow-lg">
          {/* <FaRoad className="text-2xl" size={48} /> */}
          {iconType}
        </div>
        <span className="text-sm font-semibold text-center w-full- w-auto">{text}</span>
      </div>
    );
  };

  // TODO return the ReactLeafletGoogleLayer component to add the google layer to the map
  return (
    <div className="fixed z-[999] border w-max bottom-[5%] left-[1%] flex p-2- pl-2 pt-2 pr-2 pb-1 gap-2 text-gray-600 bg-white rounded-md shadow-md">
      {/* <button className="fixed z-[999] bottom-[5%] left-[5%] text-white bg-blue-500 text-2xl px-4 py-2 w-24 h-24">Hover Over</button> */}
      {/* TODO - onHover we will display a container to the right of the button */}
      <MapButton text="hybrid" />
      <MapButton text="roadmap" />
      {/* <MapButton text="satellite" /> */}
      {/* <MapButton text="terrain" /> */}
      {mapType === "roadmap" && <ReactLeafletGoogleLayer apiKey={GOOGLE_API_KEY} type={"roadmap"} />}
      {mapType === "hybrid" && <ReactLeafletGoogleLayer apiKey={GOOGLE_API_KEY} type={"hybrid"} />}
    </div>
  );
};

export default MapLayer;
