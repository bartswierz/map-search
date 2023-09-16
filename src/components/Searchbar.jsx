import { sampleData } from "../constants/sample-data";
import { useEffect, useState } from "react";
import Results from "./Results";
import { MdClose } from "react-icons/md";

// import Test from "./test";

const Searchbar = () => {
  const [userInput, setUserInput] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const [isActive, setIsActive] = useState(false);

  // PREVENT PAGE REFRESH ON SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  //COLLECT USER INPUT
  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  // Update filter list when user input changes
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

  // Changes Search Icon from Gray to Black
  const handleClick = () => {
    setIsActive(true);
  };

  const SearchIcon = () => {
    return (
      <div className="flex items-center">
        <svg width="18" height="18" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <g>
            <path
              d="M6.472 12.944A6.472 6.472 0 1 1 6.472 0a6.472 6.472 0 0 1 0 12.944zm0-1.438a5.034 5.034 0 1 0 0-10.068 5.034 5.034 0 0 0 0 10.068z"
              fill={`${isActive ? "#100" : "#bdbdbd"}`} // uses the text-primary-color from tailwind.config.js
            />
            <path
              d="M9.86 11.166l1.044-1.045 4.896 4.896-1.045 1.044z"
              fill={`${isActive ? "#100" : "#bdbdbd"}`} // uses the text-primary-color from tailwind.config.js
            />
          </g>
        </svg>
      </div>
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      onClick={handleClick}
      className="z-[999] top-5 left-5 absolute min-w-[280px] w-[25vw]- w-[30vw]  max-w-[500px] cursor-default"
    >
      {/* INPUT FIELD */}
      <div className="flex text-gray-600 bg-white gap-2 py-2 pl-4 rounded-t-[4px] border-[1.5px] border-[#c6c5c5] shadow-sm shadow-[#bdbdbd] ">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search..."
          className="rounded-md p-2 min-w-[200px] text-xl placeholder:text-[#bfbebe] placeholder:font-medium focus:outline-none mr-12 text-ellipsis"
          onChange={(e) => handleChange(e)}
          value={userInput}
        />
        {userInput.length > 0 && (
          <button onClick={() => setUserInput("")} type="button" className="absolute right-3 top-5 hover:text-green-500">
            <MdClose size={26} color={"#444"} className=" hover:text-red-500" />
          </button>
        )}
      </div>

      {/* RESULTS */}
      <div className="mt-4">
        <Results filteredList={filteredList} userInput={userInput} setUserInput={setUserInput} />
      </div>
    </form>
  );
};

export default Searchbar;
