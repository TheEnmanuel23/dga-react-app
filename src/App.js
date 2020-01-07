import React from "react";
import { Switch, Link, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="layout">
      <nav>
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
          <Route exact path="/" component={() => <p>Home</p>} />
          <Route path="/page-a" component={() => <p>Page A</p>} />
          <Route path="/page-b" component={() => <p>Page B</p>} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
