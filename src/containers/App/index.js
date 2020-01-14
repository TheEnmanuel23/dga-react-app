import React from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "../Layout";
import Dashboard from "../Dashboard";
import Login from "../Login";
import "./styles.css";

function App() {
  return (
    <Switch>
      <Route path="/layout" component={Layout} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/login" component={Login} />
    </Switch>
  );
}

export default App;
