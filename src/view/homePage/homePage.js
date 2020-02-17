import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllCountries } from "../../redux/actions/countries";
import { Spin } from "antd";

import RockerForm from "./components/rockerForm";
import "./homePage.css";

const HomePage = ({getAllCountries, loading }) => {
  const countries = JSON.parse(localStorage.getItem("countries"));
  useEffect(() => {
    if (!countries) {
      getAllCountries();
    }
  });
  const inputChangeHandler = (key, value) => {
    localStorage.setItem(key, value);
  };
  return (
    <div className="formHolder">
      {countries ? (
        <RockerForm
          countries={countries}
          inputChangeHandler={inputChangeHandler}
        />
      ) : null}
      {loading ? <Spin tip="Loading..." className="spinner" /> : null}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    loading: state.countries.loading
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getAllCountries: () => dispatch(getAllCountries())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
