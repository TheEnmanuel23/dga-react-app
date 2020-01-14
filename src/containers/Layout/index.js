// @vendors
import React, { useContext } from "react";
import { Switch, Link, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";
// @components
import Page from "../../components/Page";
// @utilities
import { useAuth } from "../../utilities/auth";
import "./styles.css";

export default () => {
  const history = useHistory();
  const auth = useAuth();

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
          {!auth.isAuthenticated ? (
            <li>
              <Link to="/login">Iniciar sesión</Link>
            </li>
          ) : (
            <button
              onClick={() => {
                auth.logout(() => history.push("/layout"));
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
