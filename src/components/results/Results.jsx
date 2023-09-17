import { useState, useEffect } from "react";
import PinIcon from "./PinIcon";
import { sampleData } from "../../constants/sample-data";
import { useDispatch } from "react-redux";
import {
  storeLocation,
  storeDescription,
  storeWebsite,
  storeImages,
  storeTraffic,
  storeName,
  updateStore,
} from "../../redux/features/user/userSlice";
import ResultsHeader from "./ResultsHeader";

const Results = ({ input, setUserInputCallback }) => {
  const dispatch = useDispatch();
  const [resultsList, setResultsList] = useState([]);

  // Sends userInput & resultsList back to parent component to pass to Results component
  useEffect(() => {
    // Updates input text field with store name
    // setUserInputCallback(input);

    // Empty input field clears any previous results
    if (input.length === 0) {
      setResultsList([]);
      return;
    }

    // lowercase both input and name to make it case insensitive
    const filterData = sampleData.filter(({ name }) => name.toLowerCase().startsWith(input.toLowerCase()));

    console.log("results list - results: ", resultsList);
    setResultsList(filterData);
  }, [input]);

  // Dispatch values to our redux store when user clicks on a result
  const handleClick = (store) => {
    // setUserInput(store.name); // Update the input field with the store name
    setUserInputCallback(store.name); // Update the input field with the store name

    console.log("RESULTS user chose store: ", store);
    // UPDATE LOCATION TO CENTER MAP ON THE USER CHOICE
    let storeNameId = { name: store.name, id: store.id };
    dispatch(storeName(storeNameId)); //Alway given
    dispatch(storeLocation(store.location)); //
    dispatch(storeDescription(store.details?.description));

    // UPDATE DESCRIPTION FOR THE MODAL - IF STORE.DETAILS EXISTS & HAS A DESCRIPTION
    if (store.details?.description) dispatch(storeDescription(store.details.description));

    // // UPDATE IMAGES FOR THE MODAL - IF STORE.DETAILS EXISTS & HAS IMAGES
    if (store.details?.website) dispatch(storeWebsite(store.details.website));

    // UPDATE AVG Traffic FOR THE MODAL - IF STORE.DETAILS EXISTS & HAS avgTraffic
    if (store.details?.avgStoreTraffic) dispatch(storeTraffic(store.details.avgStoreTraffic));
    // else dispatch(storeTraffic({})); // If no traffic data exists, set to empty object

    // UPDATE IMAGES FOR THE MODAL - IF STORE.DETAILS EXISTS & HAS IMAGES
    if (store.images) dispatch(storeImages(store.images));
  };

  // Prevents 'no results' displaying when user input is empty
  if (input.length === 0) return null;

  return (
    <div className="text-sm h-max max-w-[500px] border border-[#bdbdbd] shadow-sm shadow-[#bdbdbd] rounded-[4px] overflow-hidden">
      {/* HEADER */}
      <ResultsHeader list={resultsList} input={input} />

      {/* RESULTS */}
      <div className="bg-white">
        {resultsList.map((store) => (
          <div
            key={store.id}
            // onClick={() => handleClick(store.location.lat, store.location.lon)}
            onClick={() => handleClick(store)}
            className="border-b border-r border-l border-gray-300 flex gap-4 p-2 hover:bg-slate-100 cursor-pointer px-3"
          >
            <PinIcon />
            {/* NAME & LOCATION */}
            <div>
              <h2 className="font-semibold text-gray-600">{store.name}</h2>
              <p className="text-gray-400">
                {store.location.lat}, {store.location.lon}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Results;
