import WebsiteLink from "./WebsiteLink";
import PinIcon from "../icons/PinIcon";

const ModalHeader = ({ geolocation, name, websiteLink }) => {
  console.log("modalHeader - geolocation", geolocation);
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
              {geolocation.lat}, {geolocation.lon}
            </span>
          </div>
        </div>

        {/* details.website */}
        <div className="w-full text-base xsm:text-sm mt-2 xsm:mt-0  xsm:w-auto xsm:self-center xsm:pl-4 xsm:justify-center">
          <WebsiteLink link={websiteLink} />
        </div>
      </div>
    </>
  );
};

export default ModalHeader;
