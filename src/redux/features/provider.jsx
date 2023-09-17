import { store } from "../store";
import { Provider } from "react-redux";

/* We will wrap our APP with the redux provider */
export function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
