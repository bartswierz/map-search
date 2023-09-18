import { useSelector } from "react-redux";
import { selectStore } from "../../redux/features/user/userSlice"; //Grabs all the store data from the redux store instead of having to grab each piece of data individually
import { MdClose } from "react-icons/md"; // X icon for closing the modal
import BarChart from "../charts/BarChart";
// import PinIcon from "../icons/PinIcon";
// import Image from "./Image";
import ImageList from "./ImageList";
import Description from "./Description";
// import WebsiteLink from "./WebsiteLink";
import ModalHeader from "./ModalHeader";
// ID and NAME bare minimum that will be given the rest are OPTIONAL
//openModal -> user clicks on marker, closeModal -> user clicks on X OR outside of modal
const Modal = ({ handleModal }) => {
  // Grabbing the store data from the redux store
  const store = useSelector(selectStore);
  const { name, location, details, images } = store;
  console.log("modal - store: ", store);

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
        {/* MODAL AREA - e.stopPropagation prevents our modal from closing when clicking within the Modal*/}
        <div className="w-[500px] bg-white rounded-md max-w-[96vw]" onClick={(e) => e.stopPropagation()}>
          {/* HEADER */}
          <ModalHeader name={name} location={location} websiteLink={details.website} />

          {/* DESCRIPTION */}
          <Description text={details.description} />

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
