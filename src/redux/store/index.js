import { combineReducers } from "redux";
import configureStore from "./createStore";
import { countriesReducer } from "../reducers/countries";

export const reducers = combineReducers({
  countries: countriesReducer
});

export default () => {
  return configureStore(reducers);
};
