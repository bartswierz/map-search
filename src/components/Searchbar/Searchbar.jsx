import SearchInput from "./SearchInput";

const Searchbar = () => {
  // PREVENT PAGE REFRESH ON SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="z-[999] top-3 left-3 absolute min-w-[280px] w-[30vw] max-w-[500px] cursor-default">
      <SearchInput />
    </form>
  );
};

export default Searchbar;
