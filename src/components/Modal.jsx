import { useSelector } from "react-redux";
import { selectStore } from "../redux/features/user/userSlice"; //Grabs all the store data from the redux store instead of having to grab each piece of data individually
import { MdClose } from "react-icons/md"; // X icon for closing the modal

// ID and NAME bare minimum that will be given the rest are OPTIONAL
//openModal -> user clicks on marker, closeModal -> user clicks on X OR outside of modal
const Modal = ({ openModal, closeModal, handleModal }) => {
  //We can FIND the corresponding store by using the ID OR Lat/Lon passed in from the marker click event then we can access our store to display the content
  //So our store will already have all data that we need to display once the user clicks on the result list item, so that is taken care of,
  //TODO- we need to figure out how to open the modal from the marker click
  const store = useSelector(selectStore);
  const { name, location, details, images } = store;

  // Moved icon to its own component for better readability
  const PinIcon = () => {
    return (
      // {/* ICON */}
      <div className="flex items-center">
        <div className="text-primary-color ">
          <svg width="30" height="30" viewBox="0 0 11 14" xmlns="http://www.w3.org/2000/svg" className="text-primary-color">
            <path
              d="M5.49 0A5.496 5.496 0 0 0 0 5.49c0 2.08 1.412 4.261 2.596 5.724.97 1.197 2.54 2.768 2.886 2.797l.051.003c.37 0 2.002-1.69 2.88-2.786 1.17-1.461 2.567-3.644 2.567-5.738A5.496 5.496 0 0 0 5.49 0zm0 8.546a3.147 3.147 0 1 1-.001-6.293 3.147 3.147 0 0 1 0 6.293z"
              fill="currentColor" // uses the text-primary-color from tailwind.config.js
            />
          </svg>
        </div>
      </div>
    );
  };

  return (
    //Set a fixed overlay with a z-index of 9999 to cover the entire screen with a black gradient background. Justify-center/items-center will keep our modal centered
    <>
      <MdClose
        onClick={handleModal}
        className="fixed top-5 right-5 font-bold text-2xl bg-slate-500- w-10 h-10 z-[9999] cursor-pointer text-gray-400 hover:text-gray-300"
      >
        X
      </MdClose>
      {/* <button onClick={handleModal} className="fixed top-5 right-5 font-bold text-2xl bg-slate-500 w-8 h-8 z-[9999]">
        X
      </button> */}
      {/* OUTSIDE AREA - Clicking the button OR outside of the modal will close it*/}
      <div
        className="fixed flex justify-center items-center top-0 left-0 w-full h-full bg-black/80 z-[9000] cursor-default"
        onClick={handleModal}
      >
        {/* MODAL - e.stopPropagation prevents our modal from closing when clicking WITHIN the Modal*/}
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
          <div className="flex gap-2 p-2 mt-10">
            {images.map((image) => {
              return (
                <div key={image} className="flex h-[200px] max-h-[150px] flex-grow">
                  <img key={image} src={image} alt="store image" className="w-full h-full object-cover" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
