import React from "react";

import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import Dashboard from "./components/dashboard/Dashboard";
import { Route, Switch } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";

export default function App() {
  return (
    <>
      <Switch>
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/login" component={Login} />

        <Route path="/register" component={Register} />
        <Route component={PageNotFound} />
      </Switch>
    </>
  );
}
