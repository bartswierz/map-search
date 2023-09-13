import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./counterSlice";

export function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  // console.log("count: ", count);
  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          className="bg-blue-500 text-white px-4 py-2 font-semibold"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span className="text-lg p-2 bg-white">{count}</span>
        <button
          aria-label="Decrement value"
          className="bg-blue-500 text-white px-4 py-2 font-semibold"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
