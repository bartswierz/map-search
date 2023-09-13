import { sampleData } from "../../instruction-files/sample-data";
import { useState, useEffect } from "react";
import Results from "./Results";
// TODO - add in the AUTOCOMPLETE
//"Autocomplete" search field - Using the provided sample data in sample-data.js, allow users to search in an input field for results based on the data name value.
const Searchbar = () => {
  // console.log("sampleData: ", sampleData);
  const [userInput, setUserInput] = useState("");
  const [filteredList, setFilteredList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit: e: ", e);
    console.log("submit - userInput: ", userInput);

    // Empty input field - reset filteredList
    if (!userInput) {
      setFilteredList([]);
      return;
    }

    // lowercase both input and name to make it case insensitive
    const filterData = sampleData.filter(({ name }) => name.toLowerCase().includes(userInput.toLowerCase()));
    console.log("filterData: ", filterData);

    setFilteredList(filterData);
  };

  // We want to DISPLAY CONTAINER BELOW INPUT -IF USER TYPES IN INPUT FIELD- if its empty we dont want to display it, if it has atleast one character show the container with matches
  const handleChange = (e) => {
    console.log("user typing: ", e.target.value);
    //SET userInput AND FILTER DATA BASED ON USER INPUT
    setUserInput(e.target.value);

    /*  TODO - filtered, we want to compare our userInput to the sampleData name and return all the object matches, we will display these below the input field
    TODO - as a user types display most closely matched results in a gray text below the input field - on submit, display the results in a container below the input field
    -filtering 
    */
    // console.log("sampleData: ", sampleData);
    // const filteredList = sampleData.filter(({ name }) => name === userInput);
    // lowercase both input and name to make it case insensitive
    // setFilteredList(sampleData.filter(({ name }) => name.toLowerCase().includes(userInput.toLowerCase())));
    // const filterData = sampleData.filter(({ name }) => name.toLowerCase().includes(userInput.toLowerCase()));
    // console.log("filterData: ", filterData);
    // console.log("filterData: ", typeof filterData);

    // setFilteredList(filterData);
    // console.log("filteredList: ", filteredList);
  };

  useEffect(() => {
    console.log("filteredList: ", filteredList);
    console.log("filteredList.length: ", filteredList.length);
  }, [filteredList]);

  return (
    <form
      onSubmit={handleSubmit}
      // using inline style to position the search bar over map - absolute + z-[9999] wasn't taking effect via Tailwind
      style={{ position: "absolute", top: 8, left: 8, zIndex: 9999 }}
    >
      <input
        type="text"
        placeholder="Search..."
        className="border-2 border-gray-300 rounded-md p-2 h-[200px] w-[300px]"
        onChange={(e) => handleChange(e)}
        // onChange={(e) => setUserInput(e.target.value)}
      />
      {/* TODO - POPULATE SEARCH MATCHES BELOW INPUT HERE AS 'USER TYPES" - IF THE FILTERED MAP HAS AT LEAST 1 VALUE IN THERE THEN DISPLAY*/}
      {filteredList.length > 0 && (
        <div className="border bg-slate-500">
          <Results filteredList={filteredList} />
        </div>
      )}
    </form>
  );
};

export default Searchbar;
