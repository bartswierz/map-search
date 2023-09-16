import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import { MapContainer, Marker, ZoomControl } from "react-leaflet";
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
  const [displayModal, setDisplayModal] = useState(false); // Display/Remove modal

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

  // Create a custom marker icon
  const MarkerPin = new Icon({
    iconUrl: IconPin, // URL to your SVG icon
    iconSize: [32, 32], // Specify the icon size (adjust as needed)
  });

  const handleModal = () => {
    setDisplayModal((modalToggle) => !modalToggle); // Show the modal when marker is clicked
  };

  return (
    // map-container set to 100vh/100vw to fill the screen
    // LEAFLET SETUP RESOURCE: https://react-leaflet.js.org/docs/start-setup/
    <div className="w-screen h-screen">
      <MapContainer
        // center={[42.354022, -71.046245]}
        center={[location.lat, location.lon]}
        zoom={17}
        scrollWheelZoom={true}
        zoomControl={false}
        dragging={`${displayModal ? true : false}`}
        className="w-full h-full"
      >
        {/* ADDING GOOGLE MAP TILES - PASSING ENV VARIABLE - API KEY*/}
        <ReactLeafletGoogleLayer apiKey={GOOGLE_API_KEY} type={"roadmap"} />
        <Searchbar__ />
        <ZoomControl position="topright" />
        <CenterToLocation location={location} />

        {/* eventHandlers required for click events - react-leaflet v3+*/}
        {showMarker && (
          <Marker
            position={[location.lat, location.lon]}
            eventHandlers={{
              click: () => handleModal(),
            }}
            icon={MarkerPin}
          >
            {/* <Popup>A pretty CSS3 popup. <br /> Easily customizable.</Popup> */}
          </Marker>
        )}

        {/* Passing callback function to update displayModal on click */}
        {displayModal && <Modal handleModal={handleModal} />}
      </MapContainer>
    </div>
  );
}

export default App;
