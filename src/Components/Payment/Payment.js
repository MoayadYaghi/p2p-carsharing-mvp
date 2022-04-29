import React from "react";
import CarRentalContract from "./../../artifacts/contracts/Carsharing.sol/CarRentalContract.json";
import CarsList from "../../Assets/Cars/response.json";
import { ethers } from "https://cdn.skypack.dev/ethers";
import { setGlobalState, useGlobalState } from "../../index";
import { useState } from "react";
import ErrorMessage from "./ErrorMessage";
import TxList from "./TxList";
import "./Payment.css";

const carId = window.location.href.split("/")[4];
// let allCarsList = CarsList.cars;
let carDetails = Object.values(CarsList)[0].filter((car) => car.id == carId)[0];

const startPayment = async ({ setError, setTxs, ether, addr }) => {
  try {
    if (!window.ethereum)
      throw new Error("No crypto wallet found. Please install it.");
    await window.ethereum.send("eth_requestAccounts");
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    ethers.utils.getAddress(addr);
    const tx = await signer.sendTransaction({
      to: addr,
      value: ethers.utils.parseEther(ether),
    });
    console.log({ ether, addr });
    console.log("tx", tx);
    setTxs([tx]);
  } catch (err) {
    setError(err.message);
  }
};

export default function GlobalCarList() {
  const carsList = useGlobalState("carsList")[0];
  const wallet = carDetails.wallet;
  const [radioButtonValue, setRadioButtonValue] = useState();
  const [error, setError] = useState();
  const [txs, setTxs] = useState([]);
  // console.log(carsList);
  // console.log(carDetails);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    setError();
    await startPayment({
      setError,
      setTxs,
      ether: data.get("ether"),
      addr: data.get("addr"),
    });
  };

  function onValueChange(event) {
    setRadioButtonValue(event.target.value);
    // console.log(radioButtonValue);
  }

  function rentCar() {
    // carDetails.reserved = true;
    // console.log(carDetails);
    updateAvailableCars();
    payWithMetamask();
    // console.log(carDetails.modelName + " is rented!");
  }

  function updateAvailableCars() {
    const newCarList = [];
    carsList.forEach((car) => {
      if (car.id == carId) {
        car.reserved = true;
        console.log(car);
      }
      newCarList.push(car);
    });
    // console.log(newCarList);
    // setGlobalState({ carsList: newCarList });
  }

  function payWithMetamask() {}

  // from .sol file
  // function setRentTime(rentTime) {}

  // function pay() {
  //   switch (radioButtonValue) {
  //     case "Mastercard":
  //       break;
  //     case "Paypal":
  //       break;
  //     case "Metamask":
  //       this.payWithMetamask();
  //       break;
  //     default:
  //       this.payWithMetamask();
  //   }
  // }

  return (
    <form onSubmit={handleSubmit}>
      <br />
      <div className="radio">
        <br />
        <br />
        <label>
          <input
            type="radio"
            value="Metamask"
            checked={radioButtonValue === "Metamask"}
            onChange={onValueChange}
          />
          Metamask
        </label>
        <br />
        <br />
        Recipient Address:
        <br />
        <br />
        <input
          type="text"
          name="addr"
          className="walletField"
          placeholder="Recipient Address"
          value={wallet}
          readOnly
        />
        <br />
        <br />
        <input
          name="ether"
          type="text"
          className="walletField"
          placeholder="Amount in ETH"
        />
      </div>
      <br />
      <div>Pay with: {radioButtonValue}</div>
      <br />
      <button type="submit" className="btn btn-default">
        Pay to rent car
      </button>
      <ErrorMessage message={error} />
      <TxList txs={txs} />
    </form>
  );
}
