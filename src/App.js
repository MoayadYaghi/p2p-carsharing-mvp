import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect,
} from "react-router-dom";

// Components
import HomePage from "./Pages/HomePage";
import Profile from "./Pages/Profile";

class App extends Component {
  render() {
    // Paths
    const HomeLink = "/";
    const ProfileLink = "/Profile";

    return (
      <div className="App">
        <Router>
          <Routes>
            <Route exact path={HomeLink} element={<HomePage />} />
            <Route exact path={ProfileLink} element={<Profile />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
export default App;
