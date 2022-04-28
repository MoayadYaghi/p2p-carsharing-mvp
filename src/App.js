import React, { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  // Redirect,
} from "react-router-dom";
import { ethers } from 'ethers'
import CarsList from './Assets/Cars/response.json'

// Components
import HomePage from "./Pages/HomePage";
import Profile from "./Pages/Profile";
import CarDetails from "./Pages/Car";
import LoginOverlay from "./Components/Navbar/Overlay";
import Payment from "./Pages/Payment";

// Abi
import CarRentalContract from "./artifacts/contracts/Carsharing.sol/CarRentalContract.json"

// Carsharing deployed to this local node
const carRentalContractAddress = '0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9'


// const [ ,  ] = createGlobalState({});
// in other files: import { ,  } from ''
// const [globalAccounts, setGlobalAccounts] = createGlobalState([]);


const App = () => {
  // Paths
  const HomeLink = "/";
  const ProfileLink = "/Profile";
  const CarDetailsLink = "/CarDetails/:id";
  const LoginLink = "/Login";
  const PaymentLink = "/CarDetails/:id/Payment";
  const [accounts, setAccounts] = useState([]);
  const [rentalCostPerHour, setCostPerHour] = useState('');
  const [rentalHours, setRentalHours] = useState('');
  
  const [carsList, setCarsList] = useState([]);

  async function requestAccount() {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
  }

  async function getCostPerHour() {
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      console.log({ provider })
      const contract = new ethers.Contract(carRentalContractAddress, CarRentalContract.abi, provider)
      try {
        const data = await contract.getCostPerHour()
        console.log('data: ', data)
      } catch (err) {
        console.log("Error: ", err)
      }
    }    
  }

  async function setCostsPerHour() {
    if (!rentalCostPerHour) return
    if (typeof window.ethereum !== 'undefined') {
      await requestAccount()
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      console.log({ provider })
      const signer = provider.getSigner()
      const contract = new ethers.Contract(carRentalContractAddress, CarRentalContract.abi, signer)
      const transaction = await contract.setCostPerHour(rentalCostPerHour)
      await transaction.wait()
      getCostPerHour()
    }
  }

  async function getRentalHours() {
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      console.log({ provider })
      const contract = new ethers.Contract(carRentalContractAddress, CarRentalContract.abi, provider)
      try {
        const data = await contract.getRentalHours()
        console.log('data: ', data)
      } catch (err) {
        console.log("Error: ", err)
      }
    }    
  }
  
  async function setCostsPerHour() {
    if (!rentalHours) return
    if (typeof window.ethereum !== 'undefined') {
      await requestAccount()
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      console.log({ provider })
      const signer = provider.getSigner()
      const contract = new ethers.Contract(carRentalContractAddress, CarRentalContract.abi, signer)
      const transaction = await contract.setRentalHours(rentalHours)
      await transaction.wait()
      getCostPerHour()
    }
  }
  
  function updateAvailableCars() {

  }

  // async function getRentalTotalCost() {}

  // async function getRentalTotalCost() {}

  // async function getAllRegisteredCars() {}

  // async function getBalance() {
  //   if (typeof window.ethereum !== 'undefined') {
  //     const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' })
  //     const provider = new ethers.providers.Web3Provider(window.ethereum);
  //     const contract = new ethers.Contract(tokenAddress, Token.abi, provider)
  //     const balance = await contract.balanceOf(account);
  //     console.log("Balance: ", balance.toString());
  //   }
  // }



  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path={HomeLink} element={<HomePage accounts={accounts} setAccounts={setAccounts} />} />
          <Route exact path={ProfileLink} element={<Profile />} />
          <Route exact path={CarDetailsLink} element={<CarDetails />} />
          <Route exact path={LoginLink} element={<LoginOverlay accounts={accounts} setAccounts={setAccounts} />} />
          <Route exact path={PaymentLink} element={<Payment />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
