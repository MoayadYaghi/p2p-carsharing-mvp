import React, { Component } from "react";
import CarRentalContract from "./../../artifacts/contracts/Carsharing.sol/CarRentalContract.json";
import CarsList from "../../Assets/Cars/response.json";
import { ethers } from "https://cdn.skypack.dev/ethers";

class Payment extends Component {
  url = window.location.href;
  carId = this.url.split("/")[4];
  modelName = "";
  imagePath = "";
  location = "";
  costPerHour = "";
  reserved = false;
  walletAddress = "";
  carDetails = Object.values(CarsList)[0].filter((car) => car.id == this.carId)[0];
  // wallet
  account = "";
  provider = "";

  constructor() {
    super();
    this.state = {};
    this.onValueChange = this.onValueChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  
async connectToBrowserWallet() {
  if (typeof window.ethereum === "undefined") {
    alert("You need to install a browserwallet like metamask.io.");
  } else {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    this.account = accounts[0];
    this.provider = new ethers.providers.Web3Provider(
      window.ethereum,
      "any"
    );
  }
}

  onValueChange(event) {
    this.setState({
      selectedOption: event.target.value,
    });
  }

  formSubmit(event) {
    event.preventDefault();
    console.log(this.state.selectedOption);
    this.pay();
  }

  pay() {
    switch (this.state.selectedOption) {
      case "Mastercard":
        break;
      case "Paypal":
        break;
      case "Metamask":
        this.payWithMetamask();
        break;
      default:
        this.payWithMetamask();
    }
  }

  // from .sol file
  setRentTime(rentTime) { }

  payWithMetamask() {
  }

  // async transfer() {
  //   const signer = await provider.getSigner();
  //   erc721ToBeTransferredContract = await new ethers.Contract(
  //     nftToBeTransferredAddress,
  //     erc721ABI,
  //     provider
  //   );
  //   erc721ToBeTransferredContractWithSigner =
  //     erc721ToBeTransferredContract.connect(signer);
  //   await erc721ToBeTransferredContractWithSigner.transferOwnership(
  //     targetWallet
  //   );
  // }

  rentCar() {
    this.carDetails.reserved = true;
    this.updateAvailableCars(this.carDetails);
    this.payWithMetamask();
    console.log(this.carDetails.modelName + " is rented!")
  }

  updateAvailableCars() {
    // send this.carDetails back to the database
  }

  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <br />
        {/* <input
          className=""
          type="text"
          placeholder="...enter desired rent hours"
          disabled={false}
          value=""
          onChange={this.handleChange}
        /> */}
        <div className="radio">
          <br />
          {/* To rent the car, please copy and paste the following public key into
          the address field: {this.walletAddress} */}
          {/* <input
            className=""
            type="text"
            placeholder="...enter target wallet"
            disabled={false}
            value=""
            onChange={this.handleChange}
          /> */}
          <br />
          <label>
            <input
              type="radio"
              value="Metamask"
              checked={this.state.selectedOption === "Metamask"}
              onChange={this.onValueChange}
            />
            Metamask
          </label>
        </div>
        <br />
        <div>Pay with: {this.state.selectedOption}</div>
        {/* <input onChange={ e => setRentTime(e.target.value) placeholder={"Enter hours"} value={}}/> */}
        <br />
        <button
          onClick={this.rentCar()}
          className="btn btn-default"
          type="submit"
        >
          Pay to rent car
        </button>
      </form>
    );
  }
}

export default Payment;
