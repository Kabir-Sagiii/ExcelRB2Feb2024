import { legacy_createStore } from "redux";
import myReducer from "./Reducer";

let myStore = legacy_createStore(myReducer);

export default myStore;
