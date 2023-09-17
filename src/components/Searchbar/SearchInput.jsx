import SearchIcon from "./SearchIcon";
import { useState } from "react";
import SearchbarCloseBtn from "./SearchbarCloseBtn";
import Results from "../results/Results";

const SearchInput = () => {
  const [userInput, setUserInput] = useState("");
  const [isActive, setIsActive] = useState(false);

  //COLLECT USER INPUT AS THEY TYPE
  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  // Updates search icon color when user clicks on input field
  const handleSearchIcon = (boolValue) => () => setIsActive(boolValue);

  return (
    <>
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
        <SearchbarCloseBtn resetInputCallback={setUserInput} input={userInput} />
      </div>
      <div className="mt-4">
        {/* Passing in callback function to update the input field with user choice on click */}
        <Results input={userInput} setUserInputCallback={setUserInput} />
      </div>
    </>
  );
};

export default SearchInput;
