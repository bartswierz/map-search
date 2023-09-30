import { useState } from "react";

// Renders the image for the modal if the image link is valid
const Image = ({ image }) => {
  const [isBroken, setIsBroken] = useState(false);

  // Invalid image link doesn't render, the remaining images will take up the space
  if (isBroken) return null;

  return (
    <div key={image} className="max-h-[200px] w-full rounded-md overflow-hidden">
      <img
        key={image}
        src={image}
        alt="store image"
        className="w-full h-full object-cover object-center"
        onError={() => {
          // Handle broken image link
          setIsBroken(true);
        }}
      />
    </div>
  );
};

export default Image;
