import { Marker } from "react-leaflet";
import { Icon } from "leaflet";
// import IconPin from "./assets/icon-pin.svg";
import IconPin from "../../assets/icon-pin.svg";

const MarkerPin = ({ showMarker, location, handleModalCallback }) => {
  // Create a custom marker icon
  const CustomMarkerPin = new Icon({
    iconUrl: IconPin,
    iconSize: [32, 32],
  });

  if (!showMarker) return null;

  return (
    <Marker
      position={[location.lat, location.lon]}
      eventHandlers={{
        click: () => handleModalCallback(), // Opens modal - Updates openModal state to true inside Map component
      }}
      icon={CustomMarkerPin}
    >
      {/* OPTIONAL: ADD POPUP */}
    </Marker>
  );
};

export default MarkerPin;
