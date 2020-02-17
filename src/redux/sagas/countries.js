import { put, takeEvery } from "redux-saga/effects";
import * as actions from "../actions/countries";
import * as actionTypes from "../actions/actionTypes";
import axios from "axios";

function* getAllCountriesSaga() {
  yield put(actions.getAllCountriesStart());
  const response = yield axios.get("https://restcountries.eu/rest/v2/all");
  if (response.status === 200) {
    yield put(actions.getAllCountriesSuccess(response.data));
    localStorage.setItem("countries", JSON.stringify(response.data));
  } else {
    yield put(actions.getAllCountriesFail(response.data));
  }
}

export function* watchCountries() {
  yield takeEvery(actionTypes.GET_ALL_COUNTRIES, getAllCountriesSaga);
}
