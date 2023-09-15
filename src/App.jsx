/* eslint-disable no-unused-vars */
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import { MapContainer, TileLayer, Marker, Popup, ZoomControl, LayersControl, useMap, Tooltip } from "react-leaflet";
import Searchbar__ from "./components/Searchbar";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import CenterToLocation from "./components/CenterToLocation";
import Modal from "./components/Modal";
import ReactLeafletGoogleLayer from "react-leaflet-google-layer";
import IconPin from "./assets/icon-pin.svg";
const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

function App() {
  // Set to starting location in Boston, MA - Values collect from Google Maps
  const [location, setLocation] = useState({ lat: 42.34369297372647, lon: -71.04254368836378 });
  const [showModal, setShowModal] = useState(false); // TRUE = OPENED | FALSE = CLOSED

  // get location object from redux store
  const loc = useSelector((state) => {
    // console.log("state: ", state.user.location);
    return state.user.location;
  });

  // Start of the app will return empty string, this will keep the marker hidden until user clicks on a resultmarker for duration of app
  const showMarker = useSelector((state) => {
    return state.user.name;
  });

  // UPDATE LOCATION ONCE WE RECEIVE THE LOCATION FROM REDUX STORE, NEW DATA WILL BE SET WHENEVER USER CHOOSES FROM THE RESULTS LIST
  useEffect(() => {
    setLocation(loc);
  }, [loc]);

  // Create a custom icon
  const MarkerPin = new Icon({
    iconUrl: IconPin, // URL to your SVG icon
    iconSize: [32, 32], // Specify the icon size (adjust as needed)
  });

  const handleModal = () => {
    setShowModal((modalToggle) => !modalToggle); // Show the modal when marker is clicked
  };

  return (
    // map-container set to 100vh/100vw to fill the screen
    <div className="map-container z-0">
      <MapContainer
        // center={[42.354022, -71.046245]}
        center={[location.lat, location.lon]}
        zoom={17}
        scrollWheelZoom={true}
        zoomControl={false}
        dragging={`${showModal ? "false" : "true"}`}
        className="w-full h-full z-0"
      >
        {/* ADDING GOOGLE MAP TILES - PASSING ENV VARIABLE - API KEY*/}
        <ReactLeafletGoogleLayer apiKey={GOOGLE_API_KEY} type={"roadmap"} />
        <Searchbar__ />
        {/* ZOOM CONTROL */}
        <ZoomControl position="topright" />

        {/* eventHandlers required for click events - react-leaflet v3+*/}
        {showMarker && (
          <Marker
            position={[location.lat, location.lon]}
            eventHandlers={{
              click: () => handleModal(),
            }}
            icon={MarkerPin}
          >
            {/* <Popup onClick={handleModal}>A pretty CSS3 popup. <br /> Easily customizable.</Popup> */}
          </Marker>
        )}
        <CenterToLocation location={location} />

        {/* Passing function to update modal state on click */}
        {showModal && <Modal handleModal={handleModal} />}
      </MapContainer>
    </div>
  );
}

export default App;
