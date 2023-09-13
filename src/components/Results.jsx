/* eslint-disable react/prop-types */
const Results = ({ filteredList }) => {
  console.log("results : ", filteredList.length);
  // console.log("Results - filteredList: ", typeof filteredList);
  // if (!filteredList || filteredList.length === 0) {
  //   return null;
  // }

  return (
    <div className="bg-slate-500 border" style={{ border: "border", zIndex: 50 }}>
      <h2 className="bg-blue-700 p-3 border z-50" style={{ backgroundColor: "red" }}>
        {/* <h2 className="bg-blue-700 p-3 border z-50" style={{ zIndex: 50, backgroundColor: "red-" }}> */}
        Found {filteredList.length} Results:
      </h2>
      {/* AT LEAST ID AND NAME PRESENT, REST ARE OPTIONAL - TAKE CARE OF CONDITIONALS */}
      {filteredList.length > 0 &&
        filteredList.map(({ id, name, location }) => {
          // <div key={id} className="w-[300px] h-max p-2 bg-slate-300" style={{ position: "absolute", top: 8, left: 8, zIndex: 9999 }}>
          <div key={id} className="w-[300px] h-max p-2 bg-slate-300" style={{ marginTop: "10px", top: 8, left: 8, zIndex: 9999 }}>
            {id}
            {name}
            {location && (
              <span>
                {location.lat}, {location.lon}
              </span>
            )}
          </div>;
        })}
    </div>
  );
};

export default Results;
