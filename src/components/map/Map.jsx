import "leaflet/dist/leaflet.css";
import { MapContainer, ZoomControl } from "react-leaflet";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import ReactLeafletGoogleLayer from "react-leaflet-google-layer";
import Searchbar__ from "../searchbar/Searchbar";
import CenterToLocation__ from "./CenterToLocation";
import MarkerPin__ from "./MarkerPin";
import Modal from "../modal/Modal";
import MapLayer from "./MapLayer";
const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

// LEAFLET SETUP RESOURCE: https://react-leaflet.js.org/docs/start-setup/
const Map = () => {
  // Set to starting location to Millenium Park - Values collected from Google Maps
  // const [geolocation, setGeolocation] = useState({ lat: 41.88260909084107, lon: -87.62254314668812 });
  const [geolocation, setGeolocation] = useState({ lat: 41.31976, lon: -88.99344 });
  const [openModal, setOpenModal] = useState(false); // Display/Remove modal

  const [mapType, setMapType] = useState("hybrid");

  // get geolocation object from redux store
  const loc = useSelector((state) => {
    return state.location.geolocation;
  });

  // Start of the app will return empty string, this will keep the marker hidden until user clicks on a resultmarker for duration of app
  const showMarker = useSelector((state) => {
    return state.location.name;
  });

  // UPDATE LOCATION ONCE WE RECEIVE THE LOCATION FROM REDUX STORE, NEW DATA WILL BE SET WHENEVER USER CHOOSES FROM THE RESULTS LIST
  useEffect(() => {
    setGeolocation(loc);
  }, [loc]);

  // Marker Click => Open Modal / Close Button OR Outside Modal => Close Modal
  const handleModal = () => setOpenModal(!openModal); // Show the modal when marker is clicked

  return (
    <MapContainer
      // center={[42.354022, -71.046245]}
      center={[geolocation.lat, geolocation.lon]}
      zoom={17}
      scrollWheelZoom={true}
      zoomControl={false}
      doubleClickZoom={false} // Disable double-click zooming
      dragging={!openModal} // WHEN MODAL IS OPEN, DRAGGING IS DISABLED
      className="w-full h-full"
    >
      {/* Map Types: 'roadmap' | 'satellite' | 'terrain' | 'hybrid' */}
      {/* ADDING GOOGLE MAP TILES - PASSING ENV VARIABLE - API KEY*/}
      {/* <ReactLeafletGoogleLayer apiKey={GOOGLE_API_KEY} type={"roadmap"} /> */}
      {/* <ReactLeafletGoogleLayer apiKey={GOOGLE_API_KEY} type={"terrain"} /> */}
      {/* <ReactLeafletGoogleLayer apiKey={GOOGLE_API_KEY} type={"satellite"} /> */}
      {/* <ReactLeafletGoogleLayer apiKey={GOOGLE_API_KEY} type={"hybrid"} /> */}
      {/* {mapType === "roadmap" && <ReactLeafletGoogleLayer apiKey={GOOGLE_API_KEY} type={"roadmap"} />}
      {mapType === "hybrid" && <ReactLeafletGoogleLayer apiKey={GOOGLE_API_KEY} type={"hybrid"} />} */}

      <MapLayer />

      {/* <ZoomControl position="bottomright" className="hidden" /> */}
      <ZoomControl position="topright" className="hidden" />

      {/* CONTAINS SEARCHBAR & RESULTS COMPONENT */}
      <Searchbar__ />

      {/* MARKER - onClick opens Modal - passing in handleModal to set openModal to true */}
      <MarkerPin__ showMarker={showMarker} location={geolocation} handleModalCallback={handleModal} />

      {/* MOVES TO NEW MARKER LOCAITON */}
      <CenterToLocation__ location={geolocation} />

      {/* Passing callback function to close modal when user clicks Close Btn or outside of modal */}
      {openModal && <Modal handleModal={handleModal} />}
    </MapContainer>
  );
};

export default Map;
