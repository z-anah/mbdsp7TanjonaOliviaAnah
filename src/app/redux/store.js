import { combineReducers, createStore } from "redux";
import counter from "./reducers/reducer";
import LangReducer from "./reducers/LangReducer";

// let store = createStore(counter);

let store = createStore(
  combineReducers({
    counter,
    LangReducer,
  })
);

export default store;
