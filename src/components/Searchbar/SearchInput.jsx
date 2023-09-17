import { MdClose } from "react-icons/md";
import SearchIcon from "./SearchIcon";
import { useState, useEffect } from "react";
// import sampleData from "../../data/sampleData.json";
import { sampleData } from "../../constants/sample-data";

const SearchInput = () => {
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

  useEffect(() => {
    // Empty input field clears any results
    if (userInput.length === 0) {
      setFilteredList([]);
      return;
    }

    // lowercase both input and name to make it case insensitive
    const filterData = sampleData.filter(({ name }) => name.toLowerCase().startsWith(userInput.toLowerCase()));

    setFilteredList(filterData);
  }, [userInput]);

  // Reset User Input
  const SearchCloseBtn = () => {
    if (userInput.length === 0) return null;

    return (
      <div className="absolute flex justify-center items-center top-0 right-2 h-[62px]">
        <button onClick={() => setUserInput("")} type="button" className="right-3 top-5">
          <MdClose size={26} color={"#444"} />
        </button>
      </div>
    );
  };

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
      <SearchCloseBtn />
    </div>
  );
};

export default SearchInput;
