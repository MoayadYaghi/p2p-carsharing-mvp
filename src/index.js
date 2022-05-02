// import {StrictMode} from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { MoralisProvider } from "react-moralis";
import { createGlobalState } from 'react-hooks-global-state'
import CarsList from "./Assets/Cars/response.json";
import { ethers } from 'ethers'
import CarRentalContract from "./artifacts/contracts/Carsharing.sol/CarRentalContract.json";

const APP_ID = process.env.REACT_APP_MORALIS_APPLICATION_ID;
const SERVER_URL = process.env.REACT_APP_MORALIS_SERVER_URL;

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const carRentalContractAddress = '0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9'

const { setGlobalState, useGlobalState } = createGlobalState({
  carsList: CarsList.cars
  // accounts: 
})

async function getAllOfferedCars() {
  if (typeof window.ethereum !== 'undefined') {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    console.log({ provider })
    const contract = new ethers.Contract(carRentalContractAddress, CarRentalContract.abi, provider)
    try {
      const allOfferedCars = await contract.getAllOfferedCars()
      setGlobalState({ carsList: allOfferedCars});
      console.log(allOfferedCars)
    } catch (err) {
      console.log("Error: ", err)
    }
  }
}

// console.log(APP_ID)
// console.log(SERVER_URL)

root.render(
  // <StrictMode>
  // <App />
  <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
    <App />
  </MoralisProvider>,
  // </StrictMode>,
);

export { useGlobalState, setGlobalState };
