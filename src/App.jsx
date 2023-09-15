/* eslint-disable no-unused-vars */
import { MapContainer, TileLayer, Marker, Popup, ZoomControl, useMap, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Searchbar__ from "./components/Searchbar";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import CenterToLocation from "./components/CenterToLocation";
import Modal from "./components/Modal";

/*
DOCUMENTATION USED - FOR INTERVIEW PURPOSES
REACT LEAFLET INSTALLATION - https://react-leaflet.js.org/docs/start-installation/
  - npm install react react-dom leaflet
  - npm install react-leaflet
SETUP CODE - https://react-leaflet.js.org/docs/start-setup/

TAILWIND INSTALLATION - VITE: https://tailwindcss.com/docs/guides/vite
  - npm install -D tailwindcss postcss autoprefixer
  - npx tailwindcss init -p

STATE MANAGEMENT - REDUX - https://redux-toolkit.js.org/tutorials/quick-start
  - npm install @reduxjs/toolkit
  - npm install react-redux

CHART.JS - https://www.chartjs.org/docs/latest/getting-started/installation.html
  - npm install chart.js
  - npm install react-chartjs-2
*/

/* TODO - add a component file for the Search Field -> Search Icon - Input field
 */

function App() {
  // Set to starting location in Boston, MA - Values collect from Google Maps
  const [location, setLocation] = useState({ lat: 42.354022, lon: -71.046245 });
  const [showModal, setShowModal] = useState(false); // TRUE = OPENED | FALSE = CLOSED

  // get location object from redux store
  const loc = useSelector((state) => {
    // console.log("state: ", state.user.location);
    return state.user.location;
  });

  // UPDATE LOCATION ONCE WE RECEIVE THE LOCATION FROM REDUX STORE, NEW DATA WILL BE SET WHENEVER USER CHOOSES FROM THE RESULTS LIST
  useEffect(() => {
    setLocation(loc);
  }, [loc]);

  const handleModal = () => {
    setShowModal((modalToggle) => !modalToggle); // Show the modal when marker is clicked
  };

  return (
    // map-container set to 100vh/100vw to fill the screen
    <div className="map-container z-0">
      <MapContainer
        // center={[42.354022, -71.046245]}
        center={[location.lat, location.lon]}
        zoom={19}
        scrollWheelZoom={true}
        zoomControl={false}
        dragging={`${showModal ? "false" : "true"}`}
        className="w-full h-full z-0"
      >
        <Searchbar__ />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* Map marker - set position to the desired location - currently, set to default */}
        {/* We are using eventHandlers as onClick does not work on the newer react-leaflet v3 as researched. */}
        <Marker
          position={[location.lat, location.lon]}
          eventHandlers={{
            click: () => handleModal(location.lat, location.lon),
          }}
        >
          {/* <Popup onClick={handleModal}>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup> */}
        </Marker>
        <CenterToLocation location={location} />

        {/* Set our Zoom control to the top right, can change to any of the four corners */}
        <ZoomControl position="topright" />

        {/* Passing handleModal as a prop so we can open/close modal - handleModal is a simple boolean state switch */}
        {showModal && <Modal handleModal={handleModal} />}
      </MapContainer>
      {/* </div> */}
    </div>
  );
}

export default App;
