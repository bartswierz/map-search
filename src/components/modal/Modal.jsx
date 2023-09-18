import { useSelector } from "react-redux";
import { selectStore } from "../../redux/features/user/userSlice"; //Grabs all the store data from the redux store instead of having to grab each piece of data individually
import { MdClose } from "react-icons/md"; // X icon for closing the modal
import BarChart from "../charts/BarChart";
import PinIcon from "../icons/PinIcon";
import Image from "./Image";
import ImageList from "./ImageList";
// ID and NAME bare minimum that will be given the rest are OPTIONAL
//openModal -> user clicks on marker, closeModal -> user clicks on X OR outside of modal
const Modal = ({ handleModal }) => {
  // Grabbing the store data from the redux store
  const store = useSelector(selectStore);
  const { name, location, details, images } = store;

  return (
    <>
      {/* CLOSE MODAL BUTTON */}
      <MdClose
        onClick={handleModal}
        className="fixed top-5 right-5 font-bold text-2xl bg-slate-500- w-10 h-10 z-[9999] cursor-pointer text-gray-400 hover:text-gray-300"
      >
        X
      </MdClose>
      {/* OUTSIDE AREA - CLOSE MODAL IF USER CLICKS BUTTON OR OUTSIDE OF MODAL*/}
      <div
        className="fixed flex justify-center items-center top-0 left-0 w-full h-full bg-black/80 z-[9000] cursor-default"
        onClick={handleModal}
      >
        {/* MODAL - e.stopPropagation prevents our modal from closing when clicking within the Modal*/}
        <div className="w-[500px] bg-white rounded-md" onClick={(e) => e.stopPropagation()}>
          {/* HEADER CONTAINER */}
          <div className="flex px-3 py-2 justify-between border-b-2 border-gray-200">
            {/* ICON, NAME, LOCATION */}
            <div className="flex gap-4">
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

            {/* WEBSITE LINK */}
            <div className="flex justify-center items-center">
              <button
                type="button"
                className="bg-blue-500 text-white px-8 py-2 flex justify-center items-center rounded-md h-12  hover:bg-blue-400"
              >
                {details.website && (
                  <a href={`https://www.${details.website}`} target="_blank" rel="noreferrer" className="">
                    <span className="text-white font-semibold">Visit Website</span>
                  </a>
                )}
              </button>
            </div>
          </div>

          {/* DESCRIPTION */}
          {details.description && (
            <div className="px-3 py-4">
              <p className="text-base">{details.description}</p>
            </div>
          )}

          {/* IMAGES */}
          <ImageList imgList={images} />

          {/* BAR CHART */}
          <BarChart data={details.avgStoreTraffic} />
        </div>
        {/* END OF MODAL CONTENT */}
      </div>
    </>
  );
};

export default Modal;
