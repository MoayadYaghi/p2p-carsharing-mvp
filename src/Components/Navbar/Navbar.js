import React, { Component } from 'react'
import { animateScroll as scroll } from "react-scroll";
import { Navbar, Nav } from 'react-bootstrap'
// import { Navbar, NavDropdown, Form, FormControl, Button, Nav } from 'react-bootstrap'
import { MenuItems } from "./MenuItems";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import "./Navbar.css";

import HomePage from '../HomePage/Homepage';
import Profile from '../ProfileOverview/ProfileOverview';
import Logo from '../../Assets/LOGO.jpg';


export default class NavbarComp extends Component {
  state = { loggedIn: false };
  // state = { loggedIn: true };

  componentDidMount() {
    scroll.scrollToTop();
    // console.log(this.state.loggedIn)
  }
  render() {

    const HomeLink = "/";
    const ProfileLink = "/Profile";

    return (
      <div className="Navbar">
        <div className="Headline1">
          <a className="Link" alt="logo" href="/">
            <img alt="Logo" src={Logo} className="responsive"></img>
          </a>
          <br />
          <br />
          <h1 className="AppName">Carsharing Y</h1>
        </div>
        <nav className="NavbarItems">
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.titel}
                </a>
              </li>
            );
          })}
          {this.state.loggedIn === false ?
            <li>
              <a className="nav-links" href="">
                Log In
              </a>
            </li>
            :
            <li>
            <a className="nav-links" href="">
              Logged In
            </a>
          </li>
          }
          <br />
          <br />
        </nav>
      </div>
    )
  }
}