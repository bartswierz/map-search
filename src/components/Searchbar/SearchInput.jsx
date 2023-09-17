import { MdClose } from "react-icons/md";
import SearchIcon from "./SearchIcon";
import { useState, useEffect } from "react";
// import sampleData from "../../data/sampleData.json";
import { sampleData } from "../../constants/sample-data";
import SearchbarCloseBtn from "./SearchbarCloseBtn";

const SearchInput = ({ setResultsListCallback, setUserInputCallback }) => {
  const [userInput, setUserInput] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const [isActive, setIsActive] = useState(false);
  // // PREVENT PAGE REFRESH ON SUBMIT
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };

  //COLLECT USER INPUT
  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  // Updates search icon color when user clicks on input field
  const handleSearchIcon = (boolValue) => () => setIsActive(boolValue);

  //TODO - move this logic to results, instead only pass userInput
  // Sends userInput & resultsList back to parent component to pass to Results component
  // useEffect(() => {
  //   setUserInputCallback(userInput);

  //   // Empty input field clears any results
  //   if (userInput.length === 0) {
  //     setResultsListCallback([]);
  //     return;
  //   }

  //   // lowercase both input and name to make it case insensitive
  //   const filterData = sampleData.filter(({ name }) => name.toLowerCase().startsWith(userInput.toLowerCase()));

  //   setResultsListCallback(filterData);
  // }, [userInput]);

  useEffect(() => {
    setUserInputCallback(userInput);

    // Empty input field clears any results
    // if (userInput.length === 0) {
    //   setResultsListCallback([]);
    //   return;
    // }

    // // lowercase both input and name to make it case insensitive
    // const filterData = sampleData.filter(({ name }) => name.toLowerCase().startsWith(userInput.toLowerCase()));

    // setResultsListCallback(filterData);
  }, [userInput]);

  // const Input = ({ userInput, handleChange, handleSearchIcon }) => {
  //   return (
  //     <input
  //       type="text"
  //       placeholder="Search..."
  //       value={userInput}
  //       onChange={(e) => handleChange(e)}
  //       // onClick={handleSearchIcon(true)}
  //       onFocus={handleSearchIcon(true)}
  //       onBlur={handleSearchIcon(false)}
  //       className="rounded-md p-2 text-xl placeholder:text-[#bfbebe] placeholder:font-medium focus:outline-none mr-12 text-ellipsis w-[76%]"
  //     />
  //   );
  // };

  // TODO - need to pass filteredList to Results component as props use a callback to pass it back to searchbar that can then pass it to results
  return (
    <div className="flex text-gray-600 bg-white gap-2 py-2 pl-4 rounded-t-[4px] border-[1.5px] border-[#c6c5c5] shadow-sm shadow-[#bdbdbd] ">
      {/* Passing isActive to change icon from Gray(inactive) to Black(active) */}
      <SearchIcon isActive={isActive} />
      <input
        type="text"
        placeholder="Search..."
        value={userInput}
        onChange={(e) => handleChange(e)}
        // onClick={handleSearchIcon(true)}
        onFocus={handleSearchIcon(true)}
        onBlur={handleSearchIcon(false)}
        className="rounded-md p-2 text-xl placeholder:text-[#bfbebe] placeholder:font-medium focus:outline-none mr-12 text-ellipsis w-[76%]"
      />
      {/* Updates our user input to empty string */}
      <SearchbarCloseBtn setStateCallback={setUserInput} input={userInput} />
    </div>
  );
};

export default SearchInput;
