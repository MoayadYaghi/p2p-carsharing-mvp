import React, { Component } from "react";
import { animateScroll as scroll } from "react-scroll";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";
import Logo from "../../Assets/LOGO.jpg";
import { useMoralis } from "react-moralis"; 
import { Moralis } from "moralis"; 


// let walletAddress 

(async () => {
  let walletAddress = await Moralis.User.current();
  console.log(walletAddress);
})();

// const account = await connectedAccount()

export default function NavbarComp({ accounts, setAccounts }) {
  let state = { loggedIn: false };
  // state = { loggedIn: true };
  const LoginLink = "/Login";
  const { isAuthenticated, logout } = useMoralis();

  // const walletAddress = window.ethereum.selectedAddress
  // const walletAddress = web3.currentProvider.selectedAddress
  // console.log(walletAddress);

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
        {isAuthenticated === false ? (
          <li>
            <a className="nav-links" href={LoginLink}>
              Log In
            </a>
          </li>
        ) : (
          <li>
            <a className="nav-links" href={LoginLink}>
              Logged In
            </a>
          </li>
        )}
        <br />
        <br />
      </nav>
    </div>
  );
}