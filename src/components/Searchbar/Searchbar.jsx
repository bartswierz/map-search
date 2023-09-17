// import { sampleData } from "../../constants/sample-data";
import { useEffect, useState } from "react";
import Results from "../results/Results";
// import { MdClose } from "react-icons/md";
// import SearchIcon from "./SearchIcon";
import SearchInput from "./SearchInput";

const Searchbar = () => {
  // const [userInput, setUserInput] = useState("");
  // const [resultsList, setResultsList] = useState([]);
  // const [isActive, setIsActive] = useState(false);

  // PREVENT PAGE REFRESH ON SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  //COLLECT USER INPUT
  // const handleChange = (e) => {
  //   setUserInput(e.target.value);
  // };

  //TODO - we can pass the user input as callback from the input field to search bar and then pass it to results
  // We will pass this function to the SearchInput that can call it then pass the filteredList back to the Searchbar
  // const setResultsListCallback = (resultsList) => {
  //   console.log("Filtered list passed to Parent: ", resultsList);
  //   setResultsList(resultsList);
  // };

  // // TESTING PURPOSES
  // useEffect(() => {
  //   console.log("resultsList callback updated: ", resultsList);
  // }, [resultsList]);
  // Update filter list when user input changes
  // useEffect(() => {
  //   // Empty input field clears any results
  //   if (userInput.length === 0) {
  //     setFilteredList([]);
  //     return;
  //   }

  //   // lowercase both input and name to make it case insensitive
  //   const filterData = sampleData.filter(({ name }) => name.toLowerCase().startsWith(userInput.toLowerCase()));

  //   setFilteredList(filterData);
  // }, [userInput]);

  // const SearchIcon = () => {
  //   return (
  //     <div className="flex items-center">
  //       <svg width="18" height="18" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
  //         <g>
  //           <path
  //             d="M6.472 12.944A6.472 6.472 0 1 1 6.472 0a6.472 6.472 0 0 1 0 12.944zm0-1.438a5.034 5.034 0 1 0 0-10.068 5.034 5.034 0 0 0 0 10.068z"
  //             fill={`${isActive ? "#100" : "#bdbdbd"}`} // uses the text-primary-color from tailwind.config.js
  //           />
  //           <path
  //             d="M9.86 11.166l1.044-1.045 4.896 4.896-1.045 1.044z"
  //             fill={`${isActive ? "#100" : "#bdbdbd"}`} // uses the text-primary-color from tailwind.config.js
  //           />
  //         </g>
  //       </svg>
  //     </div>
  //   );
  // };

  // Updates search icon color when user clicks on input field
  // const handleSearchIcon = (boolValue) => () => setIsActive(boolValue);

  return (
    <form onSubmit={handleSubmit} className="z-[999] top-3 left-3 absolute min-w-[280px] w-[30vw] max-w-[500px] cursor-default">
      <SearchInput />
    </form>
  );
};

export default Searchbar;
