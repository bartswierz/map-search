import { sampleData } from "../../instruction-files/sample-data";
import { useState, useEffect } from "react";

// TODO - add in the AUTOCOMPLETE
//"Autocomplete" search field - Using the provided sample data in sample-data.js, allow users to search in an input field for results based on the data name value.
const Searchbar = () => {
  // console.log("sampleData: ", sampleData);
  const [userInput, setUserInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit: e: ", e);
    console.log("user submit: ", e.target.value);
    console.log("submit - userInput: ", userInput);
    // console.log("user submit: ", e.target.input.value);
  };

  //Filter data based on user input
  // const FilteredData = () => {
  //   sampleData.filter((location) => {});
  // };

  // We want to DISPLAY CONTAINER BELOW INPUT -IF USER TYPES IN INPUT FIELD- if its empty we dont want to display it, if it has atleast one character show the container with matches
  const handleChange = (e) => {
    console.log("user typing: ", e.target.value);
    //SET userInput AND FILTER DATA BASED ON USER INPUT
    setUserInput(e.target.value);

    /*  TODO - filtered, we want to compare our userInput to the sampleData name and return all the object matches, we will display these below the input field
    -filtering 
    */
    // console.log("sampleData: ", sampleData);
    // const filteredData = sampleData.filter(({ name }) => name === userInput);
    // lowercase both input and name to make it case insensitive
    // setFilteredData(sampleData.filter(({ name }) => name.toLowerCase().includes(userInput.toLowerCase())));
    setFilteredData(sampleData.filter(({ name }) => name.toLowerCase().startsWith(userInput.toLowerCase())));
    // console.log("filteredData: ", filteredData);
  };

  useEffect(() => {
    console.log("filteredData: ", filteredData);
  }, [filteredData]);

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
      {filteredData.length > 0 && (
        <div>
          <h2 className="bg-blue-700 p-3">Found {filteredData.length} Results:</h2>
          {/* AT LEAST ID AND NAME PRESENT, REST ARE OPTIONAL - TAKE CARE OF CONDITIONALS */}
          {filteredData.map(({ id, name, location }) => {
            <div key={id} className="w-[300px] h-max p-2 bg-slate-300">
              {id}
              {name}
              {location && (
                <span>
                  {location.lat}, {location.lon}
                </span>
              )}
            </div>;
          })}
        </div>
      )}
    </form>
  );
};

export default Searchbar;
