import "./App.css";
import { useState } from "react";
import React, { Component } from "react";
import { ethers } from "ethers";
import Greeter from "./artifacts/contracts/Greeter.sol/Greeter.json";
// import Token from './artifacts/contracts/Token.sol/Token.json'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect,
} from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";

// Pages
import HomePage from "./Pages/HomePage";
import Profile from "./Pages/Profile";
import Test from "./Pages/Test";

// function App() {
//   const [greeting, setGreetingValue] = useState();
//   async function fetchGreeting() {
//     // look for the metamask extension
//     if (typeof window.ethereum !== "undefined") {
//       const provider = new ethers.providers.Web3Provider(window.ethereum);
//       console.log({ provider });
//       const contract = new ethers.Contract(
//         greeterAddress,
//         Greeter.abi,
//         provider
//       );
//       try {
//         const data = await contract.greet();
//         console.log("data: ", data);
//       } catch (err) {
//         console.log("Error: ", err);
//       }
//     }
//   }
//   async function requestAccount() {}

//   async function setGreeting() {}

class App extends Component {
  render() {
    // Paths
    const HomeLink = "/";
    const ProfileLink = "/Profile";
    const greeterAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

    return (
      <dev>
        <Router>
          <Routes>
            <Route exact path="/" component={Test} />
            {/* <Route exact path={HomeLink} component={HomePage} /> */}
            {/* <Route exact path={ProfileLink} component={Profile} /> */}
          </Routes>
        </Router>
      </dev>
    );
  }
}
export default App;
