import WebsiteLink from "./WebsiteLink";
import PinIcon from "../icons/PinIcon";

const ModalHeader = ({ geolocation, name, details }) => {
  const { website } = details;
  const { lat, lon } = geolocation;

  return (
    <>
      <div className="flex px-3 py-2 justify-between border-b-2 border-gray-200 flex-wrap">
        {/* ICON, NAME, LOCATION */}
        <div className="flex gap-4 justify-center w-full xsm:w-max">
          {/* ICON */}
          <div className="flex justify-content items-center">
            <PinIcon />
          </div>

          {/* NAME & LOCATION */}
          <div className="flex flex-col">
            <span className="text-xl font-semibold text-name-color">{name}</span>
            <span className="text-base text-gray-400 font-medium">
              {lat}, {lon}
            </span>
          </div>
        </div>

        {/* WEBSITE */}
        {/* <div className="b flex items-start justify-start w-full"> */}
        <div className="w-full xsm:w-max">
          <WebsiteLink link={website} />
        </div>
      </div>
    </>
  );
};

export default ModalHeader;
