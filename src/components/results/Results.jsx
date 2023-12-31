import { useState, useEffect } from "react";
import PinIcon from "../icons/PinIcon";
import { hikingData } from "../../constants/hiking-data";
import { useDispatch } from "react-redux";
import { updateStore } from "../../redux/features/location/locationSlice";
import ResultsHeader from "./ResultsHeader";

const Results = ({ input, setUserInputCallback }) => {
  const dispatch = useDispatch();
  const [resultsList, setResultsList] = useState([]);
  const [displayResults, setDisplayResults] = useState(true);

  // Creates a results list that START WITH the user input
  useEffect(() => {
    // Empty input field clears any previous results
    if (input.length === 0) {
      setResultsList([]);
      return;
    }

    // lowercase both input and name to make it case insensitive
    const filterData = hikingData.filter(({ name }) => name.toLowerCase().startsWith(input.toLowerCase()));

    setResultsList(filterData);

    // setting to true to allow results to display once again since the input has changed
    setDisplayResults(true);
  }, [input]);

  // Dispatch values to our redux store when user clicks on a result
  const handleClick = (store) => {
    setDisplayResults(false); // HIDE RESULTS LIST

    setUserInputCallback(store.name); // UPDATE INPUT FIELD WITH STORE NAME PICKED

    /* UPDATE STORE W/ USER CHOICE: GUARNTEED - NAME, ID
    OPTIONAL: LOCATION, IMAGES, & DETAILS(DESCRIPTION, TRAFFIC, WEBSITE)  */
    dispatch(updateStore(store));
  };

  // clear results list and re-renders when user clicks on a result
  useEffect(() => {
    if (!displayResults) setResultsList([]);
  }, [displayResults]);

  /* input length 0 takes care of user clearing field,  */
  if (input.length === 0 || resultsList.length === 0 || !displayResults) return null;

  return (
    <div className="text-sm h-max max-w-[500px] border border-[#bdbdbd] shadow-sm shadow-[#bdbdbd] rounded-[4px] overflow-hidden mt-4">
      {/* HEADER */}
      <ResultsHeader list={resultsList} input={input} />

      {/* RESULTS CONTENT */}
      <div className=" bg-primary-bg">
        {resultsList.map((store) => (
          <div
            key={store.id}
            onClick={() => handleClick(store)}
            className="border-b border-r border-l border-gray-300 flex gap-4 p-3 hover:bg-slate-100 cursor-pointer px-3 transition-all ease-in-out duration-300"
          >
            <PinIcon />
            {/* NAME & LOCATION */}
            <div>
              <h2 className="font-semibold text-name-color">{store.name}</h2>
              <p className="text-secondary-color">
                {store.geolocation.lat}, {store.geolocation.lon}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Results;
