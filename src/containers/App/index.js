// @vendors
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// @components
import Layout from "../Layout";
import Dashboard from "../Dashboard";
import Login from "../Login";
// @utilities
import { useAuth } from "../../utilities/auth";
import ProtectedRouter from "../../utilities/ProtectedRouter";
import "./styles.css";

function App() {
  const auth = useAuth();

  return (
    <Switch>
      <Route path="/layout" component={Layout} />
      <ProtectedRouter path="/dashboard">
        <Dashboard />
      </ProtectedRouter>
      <Route
        path="/login"
        render={props =>
          !auth.isAuthenticated ? (
            <Login {...props} />
          ) : (
            <Redirect to="/layout" />
          )
        }
      />
    </Switch>
  );
}

export default App;
