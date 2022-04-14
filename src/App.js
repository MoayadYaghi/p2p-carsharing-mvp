import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect,
} from "react-router-dom";

import HomePage from "./Pages/HomePage";
import Profile from "./Pages/Profile";

// function App() {
class App extends Component {
  render() {
    const HomeLink = "/";
    const ProfileLink = "/Profile";

    return (
      <div className="App">
        <body>
        <Router>
          <Routes>
            <Route exact path={HomeLink} element={<HomePage/>}/>
            <Route exact path={ProfileLink} element={<Profile/>}/>
          </Routes>
        </Router>
        </body>
      </div>
    );
  }
}
export default App;
