import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { useStores } from "../modal/root-store/root-store-context";
import AddProjectScreen from "../screens/AddProjectScreen/AddProjectScreen";
import MainScreen from "../screens/MainScreen/MainScreen";

export default function RootNavigation() {
  const RootStore = useStores();
  return (
    <Router>
      <Switch>
        <Route path="/project">
          <div>PROJECT</div>
        </Route>
        <Route path="/help">
          <div>HELP</div>
        </Route>
        <Route path="/add">
          <AddProjectScreen />
        </Route>
        <Route path="/">
          <MainScreen />
        </Route>
      </Switch>
    </Router>
  );
}
