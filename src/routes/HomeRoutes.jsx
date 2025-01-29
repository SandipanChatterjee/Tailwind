import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../components/Home/Home";

export const HomeRoutes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Redirect to="/" from="/" />
    </Switch>
  );
};
