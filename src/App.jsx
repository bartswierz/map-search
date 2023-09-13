// import { useState } from "react";
// import { MapContainer, TileLayer, useMap, Marker, Popup, ZoomControl } from "react-leaflet";
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Searchbar from "./components/Searchbar";
/*
DOCUMENTATION USED - FOR INTERVIEW PURPOSES
REACT LEAFLET INSTALLATION - https://react-leaflet.js.org/docs/start-installation/
  - npm install react react-dom leaflet
  - npm install react-leaflet
SETUP CODE - https://react-leaflet.js.org/docs/start-setup/

TAILWIND INSTALLATION - VITE: https://tailwindcss.com/docs/guides/vite
  - npm install -D tailwindcss postcss autoprefixer
  - npx tailwindcss init -p
*/

/* TODO - add a component file for the Search Field -> Search Icon - Input field
 */

function App() {
  return (
    // map-container set to 100vh/100vw to fill the screen
    <div className="map-container w-screen- h-screen- relative-">
      {/* <div className="z-10 absolute top-4 left-4 bg-white p-2">
        <Searchbar />
      </div> */}
      {/* <div className="map-container relative"> */}
      {/* <div className="absolute top-4 left-0 z-20"> */}
      {/* <div className="absolute top-0 left-20 mt-20"> */}

      {/* </div> */}

      {/* </div> */}
      {/* setting our Map Container to 100% width/height of the div container -> full screen 
      -Added zoomControl={false} to remove the default zoom control from the top left and placed one in the top right to make space for the search bar
      */}
      {/* <div className="w-full h-full z-0"> */}
      {/* <div className="w-full h-full"> */}
      <MapContainer
        center={[42.35, -71.04]}
        zoom={20}
        scrollWheelZoom={false}
        zoomControl={false}
        // style={{ width: "100%", height: "calc(100% - 60px)", zIndex: 0 }}
        style={{ minWidth: "100%", minHeight: "100%", zIndex: 0 }}
      >
        <div className="z-10 absolute top-4 left-4 bg-white p-2" style={{ position: "absolute", top: 0, left: 0 }}>
          <Searchbar />
        </div>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* Map marker - set position to the desired location - currently, set to default */}
        {/* <Marker position={[42.354022, -71.046245]}> */}
        <Marker position={[-34.397, 150.644]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        {/* Set our Zoom control to the top right, can change to any of the four corners */}
        <ZoomControl position="topright" />
        {/* <ZoomControl position="bottomright" /> */}
      </MapContainer>
      {/* </div> */}
    </div>
  );
}

export default App;
