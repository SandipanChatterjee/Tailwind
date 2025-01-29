import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import About from "../components/About/About";

export const AboutRoutes = () => {
  return (
    <Switch>
      <Route path="/about" exact component={About} />
      <Redirect to="/about" from="/" />
    </Switch>
  );
};
