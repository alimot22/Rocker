import * as actionTypes from "./actionTypes";

export const getAllCountries = () => {
  return {
    type: actionTypes.GET_ALL_COUNTRIES
  };
};

export const getAllCountriesStart = () => {
  return {
    type: actionTypes.GET_ALL_COUNTRIES_START
  };
};
export const getAllCountriesSuccess = (response) => {
  return {
    type: actionTypes.GET_ALL_COUNTRIES_SUCCESS,
    response:response
  };
};


export const getAllCountriesFail = error => {
  return {
    type: actionTypes.GET_ALL_COUNTRIES_FAIL,
    error: error
  };
};
