import React from "react";
import { Link } from "react-router-dom";
import { useMoralis } from "react-moralis";

export default function Home({ accounts, setAccounts }) {
  const HomeLink = "/";
  const { isAuthenticated, logout } = useMoralis();
  const { authenticate, authError } = useMoralis();

  async function connectedAccount() {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        // outputs all the accounts that exist in the metamask wallet
        method: "eth_requestAccounts",
      });
      setAccounts(accounts);
      console.log(accounts)
    }
  }

  function authenticateUser() {
    authenticate()
    connectedAccount()
  }

  return (
    <div>
      {isAuthenticated ? (
        <p>
          You are logged in!
          <br/>
          <br/>
          <button onClick={logout}>Sign Out</button>
        </p>
      ) : (
        <div>
          <div>
            {authError && (
              <p>
                {authError.name}
                {authError.message}
              </p>
            )}
            <button onClick={authenticateUser}>Login using Metamask</button>
          </div>
        </div>
      )}
      <Link to={HomeLink}>
        <button>Return to Homepage</button>
      </Link>
    </div>
  );
}