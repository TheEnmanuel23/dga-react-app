// @vendors
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// @components
import Layout from "../Layout";
import Dashboard from "../Dashboard";
import Login from "../Login";
// @utilities
import { useAuth } from "../../utilities/auth";
import "./styles.css";

function App() {
  const auth = useAuth();

  return (
    <Switch>
      <Route path="/layout" component={Layout} />
      <Route path="/dashboard">
        {() =>
          auth.isAuthenticated ? <Dashboard /> : <Redirect to="/login" />
        }
      </Route>
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
