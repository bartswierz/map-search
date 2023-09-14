// import { useState } from "react";
// import { MapContainer, TileLayer, useMap, Marker, Popup, ZoomControl } from "react-leaflet";
import { MapContainer, TileLayer, Marker, Popup, ZoomControl, useMap, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Searchbar__ from "./components/Searchbar";
import { useSelector, useDispatch } from "react-redux";
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
*/

/* TODO - add a component file for the Search Field -> Search Icon - Input field
 */

function App() {
  const dispatch = useDispatch();
  // const [location, setLocation] = useState({ lat: 42.35, lon: -71.04 });
  const [location, setLocation] = useState({ lat: 42.354022, lon: -71.046245 });
  const [showModal, setShowModal] = useState(false); // True when user clicks Marker on map, set to false when they click X OR anywhere outside of the modal window

  // const [location, setLocation] = useState({ lat: -34.397, lon: 150.644 });
  const loc = useSelector((state) => {
    console.log("state: ", state.user.location);
    // return state.userSlice.location;
    // return state.user.location;
    // return setLocation(state.user.location);
    return state.user.location;
  });

  useEffect(() => {
    // const loc = useSelector((state) => {
    //   console.log("state: ", state.user.location);
    // return state.userSlice.location;
    // return state.user.location;
    setLocation(loc);
    // });
  }, [loc]);

  // const handleModal = () => {
  //   console.log("marker clicked");
  // };
  // const map = useMap();

  const handleModal = () => {
    console.log("marker clicked");
    // setShowModal(true); // Show the modal when marker is clicked
    setShowModal((modalToggle) => !modalToggle); // Show the modal when marker is clicked
  };

  // const handleCloseModal = () => {
  //   setShowModal(false); // Close the modal when needed
  // };
  // useEffect(() => {
  //   if (location) {
  //     map.setView([location.lat, location.lon], 20); // Set the view to the marker's position with a zoom level of 20
  //   }
  // }, [location]);

  console.log("loc passed in APP: ", loc);
  console.log("location: ", location.lat, ",", location.lon);

  if (!location) return <div className="text-2xl font-bold text-center">Loading... No coordinates...</div>;

  return (
    // map-container set to 100vh/100vw to fill the screen
    <div className="map-container w-screen- h-screen- relative- z-0">
      <MapContainer
        // center={{ lat: 42.35, lng: -71.04 }}
        // center={[42.354022, -71.046245]}
        // center={[-34.397, 150.644]}
        center={[location.lat, location.lon]}
        // center={[location.lat, location.lon]}
        zoom={23}
        scrollWheelZoom={true}
        zoomControl={false}
        // zoomControl={false}
        // style={{ width: "100%", height: "calc(100% - 60px)", zIndex: 0 }}
        style={{ minWidth: "100%", minHeight: "100%", zIndex: 0 }}
      >
        <Searchbar__ />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* Map marker - set position to the desired location - currently, set to default */}
        <div onClick={handleModal}>
          {/* <Marker position={[location.lat, location.lon]} icon={"./assets/icon-pin.svg"}> */}
          <Marker position={[location.lat, location.lon]}>
            {/* TODO - replace popup with modal */}
            {/* <Popup className="height-[500px]">
              <Modal />
            </Popup> */}
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </div>
        {/* )} */}
        <CenterToLocation location={location} />
        {/* Set our Zoom control to the top right, can change to any of the four corners */}
        <ZoomControl position="topright" />
        {/* <ZoomControl position="bottomright" /> */}
        {/* {showModal && <Modal />} */}
      </MapContainer>
      {/* </div> */}
    </div>
  );
}

export default App;
