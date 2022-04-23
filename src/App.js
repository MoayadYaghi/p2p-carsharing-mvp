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
import LoginOverlay from "./Components/Navbar/Overlay";
import Payment from "./Pages/Payment";

class App extends Component {
  render() {
    // Paths
    const HomeLink = "/";
    const ProfileLink = "/Profile";
    const CarDetailsLink = "/CarDetails/:id";
    const LoginLink = "/Login";
    const PaymentLink = "/CarDetails/:id/Payment";

    return (
      <div className="App">
        <Router>
          <Routes>
            <Route exact path={HomeLink} element={<HomePage />} />
            <Route exact path={ProfileLink} element={<Profile />} />
            <Route exact path={CarDetailsLink} element={<CarDetails />} />
            <Route exact path={LoginLink} element={<LoginOverlay />} />
            <Route exact path={PaymentLink} element={<Payment />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
export default App;
