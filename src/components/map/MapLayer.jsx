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

  const MapButton = ({ text }) => {
    const iconType = text === "hybrid" ? <GiTrail className="text-2xl" size={48} /> : <FaRoad className="text-2xl" size={48} />;

    return (
      <div
        className={`${mapType === text ? "b border-white" : null} b w-full- w-[64px] cursor-pointer hover:bg-blue-500`}
        onClick={() => setMapType(`${text}`)}
      >
        {/* <div className="b w-full h-[80%]">Image</div> */}
        <div className="b flex justify-center items-center p-1">
          {/* <FaRoad className="text-2xl" size={48} /> */}
          {iconType}
        </div>
        <span className="text-base text-center">{text}</span>
      </div>
    );
  };

  // TODO return the ReactLeafletGoogleLayer component to add the google layer to the map
  return (
    <div className="z-[999]">
      {/* <button className="fixed z-[999] bottom-[5%] left-[5%] text-white bg-blue-500 text-2xl px-4 py-2 w-24 h-24">Hover Over</button> */}

      {/* TODO - onHover we will display a container to the right of the button */}
      <div className="z-[999] border w-[400px]- w-max h-[100px] fixed bottom-[5%] left-[5%] flex p-2 gap-2 text-white">
        <MapButton text="hybrid" />
        <MapButton text="roadmap" />
        {/* <MapButton text="satellite" /> */}
        {/* <MapButton text="terrain" /> */}
      </div>

      {mapType === "roadmap" && <ReactLeafletGoogleLayer apiKey={GOOGLE_API_KEY} type={"roadmap"} />}
      {mapType === "hybrid" && <ReactLeafletGoogleLayer apiKey={GOOGLE_API_KEY} type={"hybrid"} />}
    </div>
  );
};

export default MapLayer;
