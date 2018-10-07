import React from "react";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import Home from "../components/Home";

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/home" render={props => <Home {...props} />} />
        <Redirect to="/home" />
      </Switch>
    </BrowserRouter>
  );
};
