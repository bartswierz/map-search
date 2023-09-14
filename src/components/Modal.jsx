import { useSelector } from "react-redux";
import { selectStore } from "../redux/features/user/userSlice"; //Grabs all the store data from the redux store instead of having to grab each piece of data individually

// ID and NAME bare minimum that will be given the rest are OPTIONAL
const Modal = () => {
  const store = useSelector(selectStore);
  console.log("store: ", store);

  return (
    <div className="w-full h-full max-w-[400px] max-h-[400px] fixed">
      <h1>Modal</h1>
    </div>
  );
};

export default Modal;
