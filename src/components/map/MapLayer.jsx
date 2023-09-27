import { useState } from "react";
import ReactLeafletGoogleLayer from "react-leaflet-google-layer";
import { FaRoad } from "react-icons/fa";
import { GiTrail } from "react-icons/gi";

const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

// Update the map type to either roadmap = roads OR hybrid(default) = nature & roads
const MapLayer = () => {
  // On app start, we will use the 'hybrid' map type to give us a better mix of nature & roads
  const [mapType, setMapType] = useState("hybrid");

  const MapButton = ({ text }) => {
    // Checking whether to set our icon to either roads icon or nature icon
    const iconType = text === "hybrid" ? <GiTrail className="text-xl" size={48} /> : <FaRoad className="text-xl" size={48} />;

    return (
      <div className={`group flex flex-col w-[64px] cursor-pointer hover:text-gray-900`} onClick={() => setMapType(`${text}`)}>
        <div className="border-2 border-gray-900 transition-all rounded-md flex justify-center items-center p-1 group-hover:text-gray-900 shadow-lg">
          {iconType}
        </div>
        <span className="text-sm font-semibold text-center w-full- w-auto">{text}</span>
      </div>
    );
  };

  /* Map Types: 'roadmap' | 'satellite' | 'terrain' | 'hybrid' */
  return (
    <div className="fixed z-[999] border w-max bottom-[5%] left-[1%] flex p-2- pl-2 pt-2 pr-2 pb-1 gap-2 text-gray-600 bg-white rounded-md shadow-md">
      <MapButton text="hybrid" />
      <MapButton text="roadmap" />

      {mapType === "roadmap" && <ReactLeafletGoogleLayer apiKey={GOOGLE_API_KEY} type={"roadmap"} />}
      {mapType === "hybrid" && <ReactLeafletGoogleLayer apiKey={GOOGLE_API_KEY} type={"hybrid"} />}
    </div>
  );
};

export default MapLayer;
