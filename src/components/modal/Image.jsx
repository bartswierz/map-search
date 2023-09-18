import { useState } from "react";

// Renders the image for the modal if the image link is valid
const Image = ({ image }) => {
  const [isBroken, setIsBroken] = useState(false);

  // Invalid image link
  if (isBroken) return null;

  return (
    <div key={image} className="flex h-[200px] max-h-[150px] flex-grow">
      <img
        key={image}
        src={image}
        alt="store image"
        className="w-full h-full object-cover"
        onError={() => {
          // Handle broken image link
          setIsBroken(true);
        }}
      />
    </div>
  );
};

export default Image;
