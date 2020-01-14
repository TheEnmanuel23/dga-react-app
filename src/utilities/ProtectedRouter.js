import React from "react";
import { Route, Redirect } from "react-router-dom";
// @utilities
import { useAuth } from "./auth";

export default ({ children, redirect = "/login", ...rest }) => {
  const auth = useAuth();

  return (
    <Route {...rest}>
      {auth.isAuthenticated ? children : <Redirect to={redirect} />}
    </Route>
  );
};
