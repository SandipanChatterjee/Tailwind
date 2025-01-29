import React, { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import About from "../components/About/About";
import { HomeRoutes } from "./HomeRoutes";
import { AboutRoutes } from "./AboutRoutes";

export const RootRoutes = () => {
  return (
    <Switch>
      <Route path="/" exact component={HomeRoutes} />
      <Route path="/about" component={AboutRoutes} />
      <Redirect to="/" from="/" />
    </Switch>
  );
};
