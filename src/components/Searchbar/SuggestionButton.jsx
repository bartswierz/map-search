import { hikingData } from "../../constants/hiking-data";
import { useDispatch } from "react-redux";
import { updateStore } from "../../redux/features/location/locationSlice";
import { IoAirplaneSharp } from "react-icons/io5";

const SuggestionButton = ({ setUserInputCallback, setIsSuggestedCallback }) => {
  const dispatch = useDispatch();

  const getRandomLocation = () => {
    const randomId = Math.floor(Math.random() * 27) + 1;

    const suggestedLocation = hikingData.find((trail) => trail.id === randomId);
    dispatch(updateStore(suggestedLocation));
    setUserInputCallback(suggestedLocation.name);
    setIsSuggestedCallback(true);
  };

  return (
    <>
      <button
        className="bg-blue-500 hover:bg-blue-600 transition-colors duration-300 shadow-2xl text-white mt-4 text-lg px-6 py-2 flex justify-center items-center gap-2 rounded-full"
        onClick={getRandomLocation}
      >
        Unsure? Explore hiking trails <IoAirplaneSharp />
      </button>
    </>
  );
};

export default SuggestionButton;
