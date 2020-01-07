import React from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "./Layout";
import Dashboard from "./Dashboard";
import "./App.css";

function App() {
  return (
    <Switch>
      <Route path="/layout" component={Layout} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  );
}

export default App;
