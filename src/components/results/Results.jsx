import { useState, useEffect } from "react";
import PinIcon from "../icons/PinIcon";
import { sampleData } from "../../constants/sample-data";
import { useDispatch } from "react-redux";
import {
  storeLocation,
  storeDescription,
  storeWebsite,
  storeImages,
  storeTraffic,
  storeName,
} from "../../redux/features/user/userSlice";

// const Results = ({ input, setUserInputCallback, resultsList }) => {
const Results = ({ input, setUserInputCallback }) => {
  const dispatch = useDispatch();
  const [resultsList, setResultsList] = useState([]);

  //TODO - move this logic to results, instead only pass userInput
  // Sends userInput & resultsList back to parent component to pass to Results component
  useEffect(() => {
    // Updates input text field with store name
    setUserInputCallback(input);

    // Empty input field clears any results
    if (input.length === 0) {
      setResultsList([]);
      return;
    }

    // lowercase both input and name to make it case insensitive
    const filterData = sampleData.filter(({ name }) => name.toLowerCase().startsWith(input.toLowerCase()));

    console.log("results list - results: ", resultsList);
    setResultsList(filterData);
  }, [input]);

  // console.log("resultsList: ", resultsList);
  // console.log("input: ", input.length);

  // Dispatch values to our redux store when user clicks on a result
  const handleClick = (store) => {
    // setUserInput(store.name); // Update the input field with the store name
    setUserInputCallback(store.name); // Update the input field with the store name

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

    // // UPDATE IMAGES FOR THE MODAL - IF STORE.DETAILS EXISTS & HAS IMAGES
    if (store.images) dispatch(storeImages(store.images));
  };

  // If no matches OR no user input
  if (!resultsList) {
    return null;
  }

  const ResultsHeader = (list) => {
    console.log("list passed: ", list.length);
    // console.log("list: ", list.isArray());
    //No results & no user input - this prevents 'no found' message to show up on an empty string
    if (list.length === 0 && input.length === 0) return null;

    const backgroundColor = resultsList.length === 0 ? "bg-gray-500" : "bg-blue-500";

    const numResults = list.length;
    console.log("numResults: ", numResults);

    return (
      <>
        <h2
          className={`p-3 font-semibold text-white shadow-md shadow-[#bdbdbd]
        ${backgroundColor}`}
        >
          {list.length === 0 && input.length > 0 ? (
            <span>No results found</span>
          ) : (
            <span>
              Found {numResults} {`Result${numResults > 1 ? "s" : ""}`}
            </span>
          )}
        </h2>
      </>
    );
  };
  // const ResultsHeader = (list) => {
  //   //No results & no user input - this prevents 'no found' message to show up on an empty string
  //   if (resultsList.length === 0 && input.length === 0) return null;

  //   const backgroundColor = resultsList.length === 0 ? "bg-gray-500" : "bg-blue-500";

  //   return (
  //     <>
  //       <h2
  //         className={`p-3 font-semibold text-white shadow-md shadow-[#bdbdbd]
  //       ${backgroundColor}`}
  //       >
  //         {resultsList.length === 0 && input.length > 0 ? (
  //           <span>No results found</span>
  //         ) : (
  //           <span>
  //             Found {resultsList.length} {`Result${resultsList.length > 1 ? "s" : ""}`}
  //           </span>
  //         )}
  //       </h2>
  //     </>
  //   );
  // };

  // If no matches & user input exists
  // if (resultsList.length === 0 && input.length > 0)
  //   return <span className="p-3 font-semibold text-white shadow-md shadow-[#bdbdbd] bg-gray-500">No results found</span>;

  // TODO - swap to check if it it an empty object
  // Prevents 'no results' displaying when user input is empty
  if (input.length === 0) return null;
  console.log("input: ", input.length);

  return (
    <div className="text-sm h-max max-w-[500px] border border-[#bdbdbd] shadow-sm shadow-[#bdbdbd] rounded-[4px] overflow-hidden">
      {/* HEADER */}
      <ResultsHeader list={resultsList} />

      {/* RESULTS */}
      <div className="bg-white">
        {resultsList.map((store) => (
          <div
            key={store.id}
            // onClick={() => handleClick(store.location.lat, store.location.lon)}
            onClick={() => handleClick(store)}
            className="border-b border-r border-l border-gray-300 flex gap-4 p-2 hover:bg-slate-100 cursor-pointer px-3"
          >
            {/* ICON */}
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
