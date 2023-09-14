import { useSelector } from "react-redux";
import { selectStore } from "../redux/features/user/userSlice"; //Grabs all the store data from the redux store instead of having to grab each piece of data individually
import { MdClose } from "react-icons/md"; // X icon for closing the modal
import { useState, useEffect } from "react";
// ID and NAME bare minimum that will be given the rest are OPTIONAL
//openModal -> user clicks on marker, closeModal -> user clicks on X OR outside of modal
const Modal = ({ openModal, closeModal, handleModal }) => {
  //We can FIND the corresponding store by using the ID OR Lat/Lon passed in from the marker click event then we can access our store to display the content
  //So our store will already have all data that we need to display once the user clicks on the result list item, so that is taken care of,
  //TODO- we need to figure out how to open the modal from the marker click
  const store = useSelector(selectStore);
  const { name, id, location, details, images } = store;
  // console.log("store: ", store);
  // console.log("details.description: ", details.description);
  // console.log("images: ", images);
  // console.log("website: ", details.website);
  // console.log("avgTraffic: ", details.avgTraffic);

  // if (!store) return <div>loading...</div>;

  return (
    // May have to set bg-black/80 to no background when modal is closed
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
      <div
        className="fixed flex justify-center items-center top-0 left-0 w-full h-full bg-black/80 z-[9000] cursor-default"
        onClick={handleModal}
      >
        {/* Set button in the top right corner of the screen using fixed position */}
        {/* <button onClick={closeModal} className="fixed top-5 right-5 font-bold text-2xl bg-slate-500 w-8 h-8">
        X
      </button> */}
        <div className="w-[600px] h-[400px] bg-white">
          <p>Name: {name}</p>
          <p>id: {id}</p>
          <p>
            location: {location.lat}, {location.lon}
          </p>
          {details.description && <p>Description: {details.description}</p>}

          {details.website && (
            // Fixes the website load error by adding 'www' to the url
            <a href={`https://www.${details.website}`} target="_blank" rel="noreferrer" className="">
              Website
            </a>
          )}

          <div className="flex gap-2">
            {/* Images: */}
            {images.map((image) => {
              return (
                <div key={image} className="flex h-[200px]">
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
