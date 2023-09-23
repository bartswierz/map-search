import { useState } from "react";
import SearchbarClearBtn from "./SearchbarCloseBtn";
import Results from "../results/Results";
import SearchIcon from "../icons/SearchIcon";

const Searchbar = () => {
  const [userInput, setUserInput] = useState("");
  const [isActive, setIsActive] = useState(false);
  // const [displayValue, setDisplayValue] = useState("");

  // PREVENT PAGE REFRESH ON SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  // CHANGE SEARCH ICON COLOR: ACTIVE/onFocus = BLACK | INACTIVE/onBlur = GRAY
  const handleSearchIcon = (boolValue) => {
    setIsActive(boolValue);
  };

  return (
    <form onSubmit={handleSubmit} className="absolute z-[999] top-3 left-3 min-w-[280px] w-[70vw] max-w-[500px] cursor-default">
      <div className="flex text-search-input bg-white gap-2 py-2 pl-4 rounded-t-[4px] border-[1.5px] border-[#c6c5c5] shadow-sm shadow-[#bdbdbd]">
        <SearchIcon isActive={isActive} input={userInput} />

        {/* SEARCH INPUT FIELD */}
        <input
          type="text"
          placeholder="Search..."
          value={userInput}
          onChange={(e) => handleChange(e)}
          onFocus={() => handleSearchIcon(true)}
          onBlur={() => handleSearchIcon(false)}
          className="rounded-md p-2 text-xl placeholder:text-[#bfbebe] placeholder:font-medium focus:outline-none mr-12 text-ellipsis w-[76%]"
        />

        {/* RESETS USER INPUT ONCLICK*/}
        <SearchbarClearBtn resetInputCallback={setUserInput} input={userInput} />
      </div>

      {/* CALLBACK UPDATES INPUT FIELD TO 'STORE NAME' CHOSEN */}
      <Results input={userInput} setUserInputCallback={setUserInput} />
    </form>
  );
};

export default Searchbar;
