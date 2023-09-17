import { MdClose } from "react-icons/md";

// onClick: Resets user input to empty string
const SearchbarCloseBtn = ({ setStateCallback, input }) => {
  if (input.length === 0) return null;

  return (
    <div className="absolute flex justify-center items-center top-0 right-2 h-[62px]">
      <button onClick={() => setStateCallback("")} type="button" className="right-3 top-5">
        <MdClose size={26} color={"#444"} />
      </button>
    </div>
  );
};

export default SearchbarCloseBtn;
