// Header for Results Component, displays number of results found and or a message to let a user know there is no matches found
const ResultsHeader = ({ list, input }) => {
  //No results & no user input - this prevents 'no found' message to show up on an empty string
  if (list.length === 0 && input.length === 0) return null;

  // const backgroundColor = list.length === 0 ? "bg-gray-500" : "bg-blue-500";
  const backgroundColor = list.length === 0 ? "bg-gray-500" : "bg-[#5581f6]";

  const numResults = list.length;
  console.log("numResults: ", numResults);
  
  const resultStr = numResults > 1 ? "Results:" : "Result:";

  return (
    <>
      <h2
        className={`p-3 font-semibold text-white shadow-md shadow-[#bdbdbd]
          ${backgroundColor}`}
      >
        {list.length === 0 && input.length > 0 ? (
          <span>No results found</span>
        ) : (
          <span>
            Found {numResults} {resultStr}
          </span>
        )}
      </h2>
    </>
  );
};

export default ResultsHeader;
