import * as actionTypes from "../actions/actionTypes";

const initialState = {
  response: null,
  loading: false,
  error: null
};

const getAllCountriesStart = state => {
  const newState = {
    ...state,
    loading: true
  };
  return newState;
};
const getAllCountriesSuccess = action => {
  const newState = {
    loading: false,
    response: action.response,
    error: null
  };
  return newState;
};

const getAllCountriesFail = action => {
  const newState = {
    response: null,
    loading: false,
    error: action.error
  };
  return newState;
};

export const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_COUNTRIES_START:
      return getAllCountriesStart(state);
    case actionTypes.GET_ALL_COUNTRIES_SUCCESS:
      return getAllCountriesSuccess(action);
    case actionTypes.GET_ALL_COUNTRIES_FAIL:
      return getAllCountriesFail(action);

    default:
      return state;
  }
};
