import React from "react";
import { MainPage } from "../pages";
import { Switch, Route } from "react-router";

const routes = [{ path: "/", component: MainPage }];

export const RouteHandler = () => {
  return (
    <Switch>
      {routes.map(({ path, component }) => (
        <Route exact key={path} path={path} component={component} />
      ))}
    </Switch>
  );
};
