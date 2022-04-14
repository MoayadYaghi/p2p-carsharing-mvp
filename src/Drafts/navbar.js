import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
// import { Navbar, NavDropdown, Form, FormControl, Button, Nav } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import HomePage from '../HomePage/Homepage';
import Profile from '../ProfileOverview/ProfileOverview';

export default class NavbarComp extends Component {
  render() {

    const HomeLink = "/";
    const ProfileLink = "/Profile";

    return (
      <Router>
        <div>
          <Navbar bg="dark" variant={"dark"} expand="lg">
            {/* <Navbar.Brand href="#">Navbar Demo Arjun Codes</Navbar.Brand> */}
            {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="mr-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link as={Link} to={HomeLink}>Home</Nav.Link>
                <Nav.Link as={Link} to={ProfileLink}>Profile Overview</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <div>
          <Routes>
            <Route path={HomeLink} element={<HomePage />} />
            <Route path={ProfileLink} element={<Profile />} />
          </Routes>
        </div>
      </Router>
    )
  }
}