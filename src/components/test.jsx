import { useState } from "react";
import "./App.css";

const data = ["Josh's bike shop", "John's bookstore", "Jane's cafe", "Jake's pizza place", "Jill's flower shop"];

function Test() {
  const [inputValue, setInputValue] = useState("");
  const [results, setResults] = useState([]);

  const handleInputChange = (e) => {
    const inputValue = e.target.value.toLowerCase();
    const matchingResults = data.filter((item) => item.toLowerCase().includes(inputValue));
    setInputValue(e.target.value);
    setResults(matchingResults);
  };

  const handleResultClick = (result) => {
    setInputValue(result);
    setResults([]);
  };

  return (
    <div className="App">
      <div className="autocomplete">
        <input type="text" id="search" placeholder="Search..." value={inputValue} onChange={handleInputChange} />
        {results.length > 0 && (
          <div className="autocomplete-results">
            {results.map((result, index) => (
              <div key={index} className="autocomplete-result" onClick={() => handleResultClick(result)}>
                {result}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Test;
