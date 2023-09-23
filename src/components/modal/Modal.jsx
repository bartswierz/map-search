import { useSelector } from "react-redux";
import { selectStore } from "../../redux/features/location/locationSlice"; //Selects all the store data from the redux store
import { MdClose } from "react-icons/md"; // X icon for closing the modal
import BarChart from "../charts/BarChart";
import ImageList from "./ImageList";
import Description from "./Description";
import ModalHeader from "./ModalHeader";

//openModal -> user clicks on marker, closeModal -> user clicks on X OR outside of modal
const Modal = ({ handleModal }) => {
  // Grabbing the store data from the redux store
  const store = useSelector(selectStore);
  const { name, geolocation, details, images } = store;
  const { address, description, annualVisitors, avgStoreTraffic } = details;

  const annualVistorText = annualVisitors ? `Annual Visitors: ${annualVisitors.toLocaleString()}` : null;
  return (
    <>
      {/* CLOSE MODAL BUTTON */}
      <MdClose
        onClick={handleModal}
        className="fixed top-5 right-5 font-bold text-2xl bg-slate-500- w-10 h-10 z-[9999] cursor-pointer text-gray-400 hover:text-gray-300 transition-all ease-in-out duration-300"
      >
        X
      </MdClose>
      {/* OUTSIDE AREA - CLOSE MODAL IF USER CLICKS BUTTON OR OUTSIDE OF MODAL*/}
      <div
        className="fixed flex justify-center items-center top-0 left-0 w-full h-full bg-black/80 z-[9000] cursor-default"
        onClick={handleModal}
      >
        {/* MODAL AREA - e.stopPropagation prevents our modal from closing when clicking within the Modal*/}
        <div className="w-[500px] bg-white rounded-md max-w-[96vw] h-auto" onClick={(e) => e.stopPropagation()}>
          <ModalHeader name={name} geolocation={geolocation} details={details} />
          <div className="flex flex-col gap-2 px-2 pt-4 pb-4">
            <Description text={address} />
            <Description text={annualVistorText} />
            <Description text={description} />
            <ImageList imgList={images} />
            <BarChart data={avgStoreTraffic} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
