import { Marker } from "react-leaflet";
import { Icon } from "leaflet";
// import IconPin from "./assets/icon-pin.svg";
import IconPin from "../../assets/icon-pin.svg";

const MarkerPin = ({ showMarker, location, handleModalCallback }) => {
  // Create a custom marker icon
  const CustomMarkerPin = new Icon({
    iconUrl: IconPin, // URL to your SVG icon
    iconSize: [32, 32], // Specify the icon size (adjust as needed)
  });

  if (!showMarker) return null;

  return (
    <Marker
      position={[location.lat, location.lon]}
      eventHandlers={{
        click: () => handleModalCallback(), // Opens modal - function passed from App.jsx
      }}
      icon={CustomMarkerPin}
    >
      {/* POPUP */}
    </Marker>
  );
};

export default MarkerPin;
