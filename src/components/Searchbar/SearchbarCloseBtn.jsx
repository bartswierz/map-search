import { MdClose } from "react-icons/md";

// onClick: Resets user input to empty string and removes the close button because input is length 0
const SearchbarClearBtn = ({ resetInputCallback, input }) => {
  // Hides the close button when user input is empty
  if (input.length === 0) return null;

  return (
    <div className="absolute flex justify-center items-center top-0 right-2 h-[62px] z-[999]">
      <button type="button" onClick={() => resetInputCallback("")} className="right-3 top-5">
        <MdClose size={26} color={"#444"} />
      </button>
    </div>
  );
};

export default SearchbarClearBtn;
