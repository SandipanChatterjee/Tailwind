import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../components/Home/Home";
import Profile from "../components/Home/Profile/Profile";

export const HomeRoutes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/profile/:id" exact component={Profile} />
      <Redirect to="/" />
    </Switch>
  );
};
