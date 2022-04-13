import React, { Component } from "react";
import { animateScroll as scroll } from "react-scroll";
import { MenuItems } from "./MenuItems";
// import "./Navbar.css";
import logo from "../../assets/LOGO.jpg";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = { clicked: false };

  componentDidMount() {
    scroll.scrollToTop();
  }
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    const LogInLink = "/Login";
    const BasketLink = "/RentedCars";

    var Username = sessionStorage.getItem("Username");
    var SignedIn = sessionStorage.getItem("token");
    return (
      <div>
        <div className="Headline1">
          <a className="Link" alt="logo" href="/">
            <img alt="Logo" border="0" src={logo} className="Logo"></img>
          </a>
          <h1 className="dAppName">Charsharing Y</h1>
        </div>
        <nav className="NavbarItems">
          <div className="menu-icon" onClick={this.handleClick}>
            <i
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
          <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
            {/* MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <a className={item.cName} href={item.url}>
                    {item.titel}
                  </a>
                </li>
              );
            })**/}
          </ul>
          <div>
            {/* {console.log(Username)} */}

            <Link className="signIn" to={LogInLink}>
              {SignedIn !== null
                ? Username === null
                  ? "Sign In"
                  : Username
                : "Resign In"}
            </Link>
          </div>

          <Link to={BasketLink}>
            <div className="menu-cart">
              <i className="fas fa-shopping-cart"></i>
            </div>
          </Link>
        </nav>
      </div>
    );
  }
}

export default Navbar;
