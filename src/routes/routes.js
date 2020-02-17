import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import HomePage from "../view/homePage/homePage";

const routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={HomePage}></Route>
    </Switch>
  );
};

export default withRouter(routes);
