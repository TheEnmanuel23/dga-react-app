import React from "react";
import { Switch, Link, Route } from "react-router-dom";
import "./App.css";

const Page = ({ children, ...rest }) => {
  return (
    <div className="layout-page" {...rest}>
      {children}
    </div>
  );
};

function App() {
  return (
    <div className="layout">
      <nav className="layout-nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-a">Page A</Link>
          </li>
          <li>
            <Link to="/page-b">Page B</Link>
          </li>
        </ul>
      </nav>
      <div className="layout-content">
        <Switch>
          <Route
            exact
            path="/"
            component={() => (
              <Page style={{ color: "white", background: "#2aa02f" }}>
                Home
              </Page>
            )}
          />
          <Route
            path="/page-a"
            component={() => (
              <Page style={{ color: "white", background: "#00aaff" }}>
                Page A
              </Page>
            )}
          />
          <Route
            path="/page-b"
            component={() => (
              <Page style={{ color: "white", background: "#863258" }}>
                Page B
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
}

export default App;
