const SearchIcon = ({ isActive }) => {
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

export default SearchIcon;
