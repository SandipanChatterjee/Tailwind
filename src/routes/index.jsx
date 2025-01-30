import React, { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { HomeRoutes } from "./HomeRoutes";
import { AboutRoutes } from "./AboutRoutes";

export const RootRoutes = () => {
  return (
    <Switch>
      <Route path="/about" component={AboutRoutes} />
      <Route path="/" component={HomeRoutes} />
      <Redirect to="/" />
    </Switch>
  );
};
