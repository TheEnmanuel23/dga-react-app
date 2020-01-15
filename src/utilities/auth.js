import React, { useContext, useState, createContext } from "react";
import axios from "axios";
import validateSession from "./validateSession";

const Context = createContext({});

const saveSession = user => {
  localStorage.setItem("email", user.email);
  localStorage.setItem("password", user.password);
};

const clearSession = () => {
  localStorage.setItem("email", "");
  localStorage.setItem("password", "");
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!validateSession());

  const login = async (user, callback) => {
    const res = await axios.post(
      "https://login-test-dga.herokuapp.com/login",
      user
    );

    if (res.data.response) {
      saveSession(user);
      setIsAuthenticated(true);
      callback();
    }
  };

  const logout = callback => {
    clearSession();
    setIsAuthenticated(false);
    callback();
  };

  return (
    <Context.Provider
      value={{
        isAuthenticated,
        login,
        logout
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useAuth = () => {
  return useContext(Context);
};
