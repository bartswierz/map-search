import { sampleData } from "../../instruction-files/sample-data";
import { useState } from "react";
import Results from "./Results";

// TODO - add in the AUTOCOMPLETE
//"Autocomplete" search field - Using the provided sample data in sample-data.js, allow users to search in an input field for results based on the data name value.
const Searchbar = () => {
  // console.log("sampleData: ", sampleData);
  const [userInput, setUserInput] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const [isActive, setIsActive] = useState(false); // TODO - TRUE => BLACK TEXT/ICON / FALSE => GRAY TEXT/ICONto be black, inactive gray to match placeholder text

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

  // Changes Search Icon from Gray to Black when user clicks on the input field
  const handleClick = () => {
    console.log("user clicked on searchbar");
    setIsActive(true);
  };

  const SearchIcon = () => {
    return (
      // {/* ICON */}
      <div className="flex items-center">
        {/* <div> */}
        <svg width="18" height="18" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <g>
            <path
              d="M6.472 12.944A6.472 6.472 0 1 1 6.472 0a6.472 6.472 0 0 1 0 12.944zm0-1.438a5.034 5.034 0 1 0 0-10.068 5.034 5.034 0 0 0 0 10.068z"
              fill={`${isActive ? "#100" : "#bdbdbd"}`} // uses the text-primary-color from tailwind.config.js
            />
            <path
              d="M9.86 11.166l1.044-1.045 4.896 4.896-1.045 1.044z"
              // TODO - when active we want it black, inactive gray to match placeholder text
              // fill="currentColor" // uses the text-primary-color from tailwind.config.js
              fill={`${isActive ? "#100" : "#bdbdbd"}`} // uses the text-primary-color from tailwind.config.js
            />
          </g>
        </svg>
        {/* </div> */}
      </div>
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      // using inline style to position the search bar over map - absolute + z-[9999] wasn't taking effect via Tailwind
      className="z-[999] top-5 left-5 absolute min-w-[280px] w-[25vw]  max-w-[500px]"
      onClick={handleClick}
      // style={{ position: "absolute", top: 8, left: 8, zIndex: 9999 }}
    >
      <div className="flex bg-white gap-2 py-2 pl-4 rounded-t-md border-2 border-[#bdbdbd] shadow-md shadow-[#bdbdbd] ">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search..."
          className="rounded-md p-2 min-w-[200px] text-xl placeholder:text-[#bfbebe] placeholder:font-medium border-transparent focus:border-transparent"
          onChange={(e) => handleChange(e)}
        />
      </div>

      {/* TODO - POPULATE SEARCH MATCHES BELOW INPUT HERE AS 'USER TYPES" - IF THE FILTERED MAP HAS AT LEAST 1 VALUE IN THERE THEN DISPLAY*/}
      <div className="mt-4">
        <Results filteredList={filteredList} />
      </div>
    </form>
  );
};

export default Searchbar;
