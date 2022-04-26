import React, { Component } from "react";
import { animateScroll as scroll } from "react-scroll";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";
import Logo from "../../Assets/LOGO.jpg";
import { useMoralis } from "react-moralis";

export default function NavbarComp({ accounts, setAccounts }) {
  let state = { loggedIn: false };
  // state = { loggedIn: true };
  const LoginLink = "/Login";
  const { isAuthenticated, logout } = useMoralis();

  // async function connectedAccount() {
  //   if (window.ethereum) {
  //     const accounts = await window.ethereum.request({
  //       // outputs all the accounts that exist in the metamask wallet
  //       method: "eth_requestAccounts",
  //     });
  //     setAccounts(accounts);
  //     console.log(accounts);
  //   }
  // }

  // const isConnected = Boolean(accounts[0]);

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