import Image from "./Image";

// Maps through image array and returns an image component for each image
const ImageList = ({ imgList }) => {
  console.log("imgList", imgList);
  // No images
  if (imgList.length === 0) return null;

  return (
    <div className="flex gap-3 p-2">
      {imgList.map((image) => {
        return <Image image={image} key={image} />;
      })}
    </div>
  );
};

export default ImageList;
