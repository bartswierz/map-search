import { useEffect } from "react";
import { useMap } from "react-leaflet";

//Centers our map on new marker location when user clicks on a location from the Results List
// TODO - update setup to use the location from the redux store. Currently it sets user to an unknown location upon starting the app
// LEAFLET - MAP RESOURCES - https://leafletjs.com/reference.html#locate-options-setview
// eslint-disable-next-line react/prop-types
const CenterToLocation = ({ location }) => {
  const { lat, lon } = location;
  console.log("location: ", location);
  const map = useMap();

  useEffect(() => {
    map.setView([lat, lon]);
  }, [lat, lon]);

  return null;
};

export default CenterToLocation;
