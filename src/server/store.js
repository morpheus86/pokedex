import { createStore } from "redux";
import rootReducer, { middleware } from "../store/reducer/index";

export default () => {
  const store = createStore(rootReducer, {}, middleware);
  return store;
};
