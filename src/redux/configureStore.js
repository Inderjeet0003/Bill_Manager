import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
// import thunk from "redux-thunk";
// import logger from "redux-logger";
import rootReducer from "./reducers/rootReducer";

export const ConfigureStore = () => {
  return createStore(rootReducer, composeWithDevTools());
};
