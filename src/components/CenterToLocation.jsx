import { useEffect } from "react";
import { useMap } from "react-leaflet";

//Centers our map on marker location
// LEAFLET - MAP RESOURCES - https://leafletjs.com/reference.html#locate-options-setview
const CenterToLocation = ({ location }) => {
  const { lat, lon } = location;

  const map = useMap();

  useEffect(() => {
    map.setView([lat, lon]);
  }, [lat, lon, map]);

  return null;
};

export default CenterToLocation;
