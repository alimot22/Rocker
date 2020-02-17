import { watchCountries } from "../sagas/countries";
import { fork, all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([fork(watchCountries)]);
}
