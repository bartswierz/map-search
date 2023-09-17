// import { MdClose } from "react-icons/md";
import SearchIcon from "./SearchIcon";
import { useState, useEffect } from "react";
// import sampleData from "../../data/sampleData.json";
// import { sampleData } from "../../constants/sample-data";
import SearchbarCloseBtn from "./SearchbarCloseBtn";
import Results from "../results/Results";
import { useDispatch, useSelector } from "react-redux";
// const SearchInput = ({ setUserInputCallback }) => {
const SearchInput = () => {
  const [userInput, setUserInput] = useState("");
  // const [filteredList, setFilteredList] = useState([]);
  const [isActive, setIsActive] = useState(false);

  // console.log("userinput changed: ", userInput);
  //COLLECT USER INPUT AS THEY TYPE
  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  // Updates search icon color when user clicks on input field
  const handleSearchIcon = (boolValue) => () => setIsActive(boolValue);

  const setUserInputCallback = (storeName) => {
    console.log("storeName passed from results: ", storeName);
    setUserInput(storeName);
  };

  // Using input callback to pass userInput back to parent component to use in Results component
  // useEffect(() => {
  //   // setUserInputCallback(userInput);
  //   console.log("userInput changed: ", userInput);
  //   setUserInput(userInput);
  // }, [userInput]);

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
        <Results input={userInput} setUserInputCallback={setUserInput} />
      </div>
    </>
  );
};

export default SearchInput;
