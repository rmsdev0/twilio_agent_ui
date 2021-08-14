import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import AgentView from "./components/phone/AgentView";

export default function App() {
  const [agentData, setAgentData] = useState({ name: "", role: "", email: "" });

  const [phoneState, setPhoneState] = useState("offline"); // [offline, unavailable, ready, outbound, oncall, wrapup]

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/phone">Phone</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        <div id="settings">
          <div id="settings-buttons">
            <button id="settings-open">
              <i className="bi-soundwave"></i>
            </button>
            <button id="settings-close">
              <i className="bi-soundwave"></i>
            </button>
          </div>
          <div id="connection-settings">
            <div id="controls">
              <div id="info">
                <div id="client-name"></div>
                <div id="output-selection">
                  <label>Ringtone Devices</label>
                  <select id="ringtone-devices" multiple></select>
                  <label>Speaker Devices</label>
                  <select id="speaker-devices" multiple></select>
                  <br />
                  <a id="get-devices">Seeing unknown devices?</a>
                </div>
                <div id="volume-indicators">
                  <label>Mic Volume</label>
                  <div id="input-volume"></div>
                  <br />
                  <br />
                  <label>Speaker Volume</label>
                  <div id="output-volume"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/phone">
            <Phone />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Login() {
  return <LoginForm />;
}

function Phone() {
  return <AgentView />;
}

function Users() {
  return <h2>Users</h2>;
}

function Dashboard() {
  return <h2>Dashboard</h2>;
}
