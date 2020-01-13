import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import Page from "../../components/Page";
import "./styles.css";

export default () => {
  return (
    <div className="dashboard">
      <nav className="dashboard-nav">
        <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/dashboard/page-c">Page C</Link>
          </li>
          <li>
            <Link to="/dashboard/page-d">Page D</Link>
          </li>
        </ul>
      </nav>
      <div className="dashboard-content">
        <Switch>
          <Route
            exact
            path="/dashboard"
            component={() => (
              <Page style={{ color: "white", background: "#d83686" }}>
                Dashboard
              </Page>
            )}
          />
          <Route
            path="/dashboard/page-c"
            component={() => (
              <Page style={{ color: "white", background: "#00aaff" }}>
                Page C
              </Page>
            )}
          />
          <Route
            path="/dashboard/page-d"
            component={() => (
              <Page
                className="dashboard-page-d"
                style={{ color: "white", background: "rgb(214, 97, 9)" }}
              >
                <Link to="/layout">Ir al layout -></Link>
              </Page>
            )}
          />
        </Switch>
      </div>
    </div>
  );
};
