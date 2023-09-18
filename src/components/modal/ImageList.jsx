import Image from "./Image";
const ImageList = ({ imgList }) => {
  // No images
  if (imgList.length === 0) return null;

  return (
    <div className="flex gap-2 p-2 mt-10">
      {imgList.map((image) => {
        return <Image image={image} key={image} />;
      })}
    </div>
  );
};

export default ImageList;