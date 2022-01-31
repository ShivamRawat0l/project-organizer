import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MainScreen from "../screens/MainScreen.tsx";

export default function RootNavigation() {
  return (
    <Router>
      <Switch>
        <Route path="/project">
          <div>PROJECT</div>
        </Route>
        <Route path="/help">
          <div>HELP</div>
        </Route>
        <Route path="/">
          <MainScreen />
        </Route>
      </Switch>
    </Router>
  );
}
