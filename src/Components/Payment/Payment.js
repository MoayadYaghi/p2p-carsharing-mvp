import React, { Component } from "react";
import CarRentalContract from "./../../artifacts/contracts/Carsharing.sol/CarRentalContract.json";
import CarsList from "../../Assets/Cars/response.json";

class Payment extends Component {
  url = window.location.href;
  carId = this.url.split("/")[4];
  modelName = "";
  imagePath = "";
  location = "";
  costPerHour = "";
  reserved = false;
  walletAddress = "";

  constructor() {
    super();
    this.state = {
      selectedPaymentMethod: null,
    };
    this.onValueChange = this.onValueChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
    this.fetchCarDetails();
  }

  fetchCarDetails() {
    Object.values(CarsList)[0].forEach((car) => {
      // console.log(car);
      if (car.id == this.carId) {
        this.modelName = car.modelName;
        this.imagePath = car.image;
        this.location = car.location;
        this.costPerHour = car.price;
        this.reserved = car.reserved;
        this.walletAddress = car.wallet;
      }
    });
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
  setRentTime(rentTime) {}

  payWithMetamask() {}

  rentCar() {
    this.payWithMetamask();
    let newCarsList = Object.values(CarsList)[0].forEach((car) => {
      if (car.id == this.carId) car.reserved = true;
    });
    this.updateAvailableCars(newCarsList);
  }

  updateAvailableCars() {}

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
        <div>Pay with : {this.state.selectedOption}</div>
        {/* <input onChange={ e => setRentTime(e.target.value) placeholder={"Enter hours"} value={}}/> */}
        <br />
        <button
          onClick={this.rentCar}
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
