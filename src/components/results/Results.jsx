import { useState, useEffect } from "react";
import PinIcon from "./PinIcon";
import { sampleData } from "../../constants/sample-data";
import { useDispatch, useSelector } from "react-redux";
import { updateStore } from "../../redux/features/user/userSlice";
import ResultsHeader from "./ResultsHeader";
// import { updateStoreData } from "../../redux/features/user/userSlice";
const Results = ({ input, setUserInputCallback }) => {
  const dispatch = useDispatch();
  const [resultsList, setResultsList] = useState([]);

  // const testUpdate = useSelector((state) => state.updateStoreData);
  // console.log("testUpdate: ", testUpdate);
  useEffect(() => {
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
    setUserInputCallback(store.name); // Update the input field with the store name

    console.log("RESULTS user chose store: ", store);

    /* UPDATE STORE W/ USER CHOICE: GUARNTEED - NAME, ID
    OPTIONAL: LOCATION, IMAGES, & DETAILS(DESCRIPTION, TRAFFIC, WEBSITE)  */
    dispatch(updateStore(store));
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
