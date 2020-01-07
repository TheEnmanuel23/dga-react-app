import React from "react";
import { Switch, Link, Route } from "react-router-dom";
import "./Layout.css";

const Page = ({ children, className, ...rest }) => {
  return (
    <div className={`layout-page ${className}`} {...rest}>
      {children}
    </div>
  );
};

export default () => {
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
