import { useSelector } from "react-redux";
import { selectStore } from "../redux/features/user/userSlice"; //Grabs all the store data from the redux store instead of having to grab each piece of data individually

// ID and NAME bare minimum that will be given the rest are OPTIONAL
const Modal = () => {
  const store = useSelector(selectStore);
  const { name, id, location, details, images } = store;
  console.log("store: ", store);
  console.log("details.description: ", details.description);
  console.log("images: ", images);
  console.log("website: ", details.website);
  console.log("avgTraffic: ", details.avgTraffic);
  if (!store) return <div>loading...</div>;

  return (
    <div className="w-full h-full max-w-[600px] max-h-[400px] bg-white fixed top-50 left-50 right-50">
      <h1>Modal</h1>
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
  );
};

export default Modal;
