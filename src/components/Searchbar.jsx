import { sampleData } from "../../instruction-files/sample-data";
import { useState } from "react";
import Results from "./Results";

// TODO - add in the AUTOCOMPLETE
//"Autocomplete" search field - Using the provided sample data in sample-data.js, allow users to search in an input field for results based on the data name value.
const Searchbar = () => {
  // console.log("sampleData: ", sampleData);
  const [userInput, setUserInput] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  // const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = (e) => {
    // Prevent page refresh
    e.preventDefault();

    // Empty input field - reset filteredList - meant to catch if user re-submits with an empty input field
    if (!userInput) {
      setFilteredList([]);

      // TODO - Show the "No results found" message for 3 seconds then hide it
      // setShowMessage(true); // Show the "No results found" message
      // setTimeout(() => {
      //   setShowMessage(false); // Hide the message after 3 seconds
      // }, 3000);
      return;
    }

    // lowercase both input and name to make it case insensitive
    const filterData = sampleData.filter(({ name }) => name.toLowerCase().includes(userInput.toLowerCase()));
    // console.log("HandleSubmit - FilteredData: ", filterData);

    setFilteredList(filterData);
  };

  // We want to DISPLAY CONTAINER BELOW INPUT -IF USER TYPES IN INPUT FIELD- if its empty we dont want to display it, if it has atleast one character show the container with matches
  const handleChange = (e) => {
    console.log("user typing: ", e.target.value);
    //SET userInput AND FILTER DATA BASED ON USER INPUT
    setUserInput(e.target.value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      // using inline style to position the search bar over map - absolute + z-[9999] wasn't taking effect via Tailwind
      style={{ position: "absolute", top: 8, left: 8, zIndex: 9999 }}
    >
      <input
        type="text"
        placeholder="Search..."
        className="border-2 border-gray-300 rounded-md p-2 h-[50px] w-[400px] "
        onChange={(e) => handleChange(e)}
        // onChange={(e) => setUserInput(e.target.value)}
      />

      {/* TODO - POPULATE SEARCH MATCHES BELOW INPUT HERE AS 'USER TYPES" - IF THE FILTERED MAP HAS AT LEAST 1 VALUE IN THERE THEN DISPLAY*/}
      <div className="mt-4">
        <Results filteredList={filteredList} />
      </div>
    </form>
  );
};

export default Searchbar;
