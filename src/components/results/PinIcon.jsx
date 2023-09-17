const PinIcon = () => {
  return (
    <div className="flex items-center">
      <div className="text-primary-color ">
        <svg width="30" height="30" viewBox="0 0 11 14" xmlns="http://www.w3.org/2000/svg" className="text-primary-color">
          <path
            d="M5.49 0A5.496 5.496 0 0 0 0 5.49c0 2.08 1.412 4.261 2.596 5.724.97 1.197 2.54 2.768 2.886 2.797l.051.003c.37 0 2.002-1.69 2.88-2.786 1.17-1.461 2.567-3.644 2.567-5.738A5.496 5.496 0 0 0 5.49 0zm0 8.546a3.147 3.147 0 1 1-.001-6.293 3.147 3.147 0 0 1 0 6.293z"
            fill="currentColor" // uses the text-primary-color from tailwind.config.js
          />
        </svg>
      </div>
    </div>
  );
};

export default PinIcon;
