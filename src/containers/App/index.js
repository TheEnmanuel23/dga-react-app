// @vendors
import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// @components
import Layout from "../Layout";
import Dashboard from "../Dashboard";
import Login from "../Login";
import "./styles.css";

export const AuthContext = React.createContext();

function App() {
  const [isAuthenticated, setAuth] = useState();

  const login = (values, callback) => {
    localStorage.setItem("email", values.email);
    localStorage.setItem("password", values.password);
    setAuth(true);
    callback();
  };

  const logout = callback => {
    localStorage.setItem("email", "");
    localStorage.setItem("password", "");
    setAuth(false);
    callback();
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      <Switch>
        <Route path="/layout" component={Layout} />
        <Route path="/dashboard">
          {() => (isAuthenticated ? <Dashboard /> : <Redirect to="/login" />)}
        </Route>
        <Route
          path="/login"
          render={props =>
            !isAuthenticated ? <Login {...props} /> : <Redirect to="/layout" />
          }
        />
      </Switch>
    </AuthContext.Provider>
  );
}

export default App;
