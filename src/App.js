import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  // Redirect,
} from "react-router-dom";

// Components
import HomePage from "./Pages/HomePage";
import Profile from "./Pages/Profile";
import CarDetails from "./Pages/Car";

class App extends Component {
  render() {
    // Paths
    const HomeLink = "/";
    const ProfileLink = "/Profile";
    const CarDetailsLink = "/CarDetails/:id";

    return (
      <div className="App">
        <Router>
          <Routes>
            <Route exact path={HomeLink} element={<HomePage />} />
            <Route exact path={ProfileLink} element={<Profile />} />
            <Route exact path={CarDetailsLink} element={<CarDetails />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
export default App;
