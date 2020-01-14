import React from "react";
import { Switch, Link, Route } from "react-router-dom";
import Page from "../../components/Page";
import "./styles.css";

const validateSession = () => {
  const email = localStorage.getItem("email");
  const password = localStorage.getItem("password");

  return email && password;
};

const logout = () => {
  localStorage.setItem("email", "");
  localStorage.setItem("password", "");
};

export default () => {
  const session = validateSession();

  return (
    <div className="layout">
      <nav className="layout-nav">
        <ul>
          <li>
            <Link to="/layout">Home</Link>
          </li>
          <li>
            <Link to="/layout/page-a">Page A</Link>
          </li>
          <li>
            <Link to="/layout/page-b">Page B</Link>
          </li>
          {!session ? (
            <li>
              <Link to="/login">Iniciar sesión</Link>
            </li>
          ) : (
            <button
              onClick={() => {
                logout();
              }}
            >
              Cerrar Sesión
            </button>
          )}
        </ul>
      </nav>
      <div className="layout-content">
        <Switch>
          <Route
            exact
            path="/layout"
            component={() => (
              <Page style={{ color: "white", background: "#2aa02f" }}>
                Home
              </Page>
            )}
          />
          <Route
            path="/layout/page-a"
            component={() => (
              <Page style={{ color: "white", background: "#00aaff" }}>
                Page A
              </Page>
            )}
          />
          <Route
            path="/layout/page-b"
            component={() => (
              <Page
                className="layout-page-b"
                style={{ color: "white", background: "#863258" }}
              >
                <Link to="/dashboard">Ir al dashboard -></Link>
              </Page>
            )}
          />
        </Switch>
      </div>
      <div className="layout-footer">
        <div>Todos los derechos reservados 2020</div>
      </div>
    </div>
  );
};
