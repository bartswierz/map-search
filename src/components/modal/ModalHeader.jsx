import WebsiteLink from "./WebsiteLink";
import PinIcon from "../icons/PinIcon";

const ModalHeader = ({ location, name, websiteLink }) => {
  return (
    <>
      <div className="flex px-3 py-2 justify-between border-b-2 border-gray-200 flex-wrap">
        {/* TODO - make the items go from row to column at a certain width */}
        {/* <div className="flex flex-row- flex-wrap justify-between"> */}
        {/* ICON, NAME, LOCATION */}
        <div className="flex gap-4 b">
          {/* ICON */}
          <div className="flex justify-content items-center">
            <PinIcon />
          </div>

          {/* NAME & LOCATION */}
          <div className="flex flex-col">
            <span className="text-2xl font-semibold text-gray-700">{name}</span>
            <span className="text-base text-gray-400 font-medium">
              {location.lat}, {location.lon}
            </span>
          </div>
        </div>

        {/* details.website */}
        <div className="b pl-4- w-full sm:w-auto sm:self-center sm:pl-4 sm:justify-center">
          <WebsiteLink link={websiteLink} />
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default ModalHeader;
