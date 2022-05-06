import React, { Component } from "react";
import { animateScroll as scroll } from "react-scroll";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";
import Logo from "../../Assets/LOGO.jpg";
import { useMoralis } from "react-moralis"; 
import { Moralis } from "moralis"; 
import { ethers } from "https://cdn.skypack.dev/ethers";

let account = "";
let provider = "";
let chainID = "";


async function connectToBrowserWallet() {
  if (typeof window.ethereum === "undefined") {
    alert("You need to install a browserwallet like metamask.io.");
  } else {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    account = accounts[0];
    provider = new ethers.providers.Web3Provider(
      window.ethereum,
      "any"
    );        
    chainID = provider.provider.chainId
  }
}

export default function NavbarComp({ accounts, setAccounts }) {
  const LoginLink = "/Login";
  const { isAuthenticated, logout } = useMoralis();
  connectToBrowserWallet()

  return (
    <div className="Navbar">
      <div className="Headline1">
        <a className="Link" alt="logo" href="/">
          <img alt="Logo" src={Logo} className="responsive"></img>
        </a>
        <br />
        <br />
        <h1 className="AppName">DeSharing</h1>
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
              Logged In as: {chainID}...
            </a>
          </li>
        )}
        <br />
        <br />
      </nav>
    </div>
  );
}