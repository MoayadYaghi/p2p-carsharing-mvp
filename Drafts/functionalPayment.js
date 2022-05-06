import React, { Component } from "react";
import CarRentalContract from "./../../artifacts/contracts/Carsharing.sol/CarRentalContract.json";
import CarsList from "../../Assets/Cars/response.json";

// const [rentalHours, setRentalHours] = useState('');

function Payment() {
  let url = window.location.href;
  let carId = this.url.split("/")[4];
  let modelName = "";
  let imagePath = "";
  let location = "";
  let costPerHour = "";
  let reserved = false;
  let walletAddress = "";

  let state = {
    forename: "",
    lastName: "",
    email: "",
    age: "",
    orders: [],
    user: [],
    loaded: false,
    editableProfile: false,
  };

  function fetchCarDetails() {
    Object.values(CarsList)[0].forEach((car) => {
      // console.log(car);
      if (car.id == this.carId) {
        modelName = car.modelName;
        imagePath = car.image;
        location = car.location;
        costPerHour = car.price;
        reserved = car.reserved;
        walletAddress = car.wallet;
      }
    });
  }

  function onValueChange(event) {
    this.setState({
      selectedOption: event.target.value,
    });
  }

  function pay() {
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
  function setRentTime(rentTime) {}

  function payWithMetamask() {}

  function rentCar() {
    this.payWithMetamask();
    let newCarsList = Object.values(CarsList)[0].forEach((car) => {
      if (car.id == this.carId) car.reserved = true;
    });
    this.updateAvailableCars(newCarsList);
  }

  function updateAvailableCars() {}

  return (
    <form>
      <br />
      <input
        className=""
        type="text"
        placeholder="...enter desired rent hours"
        disabled={false}
        value=""
        onChange={this.handleChange}
      />
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
            onChange={onValueChange}
          />
          Metamask
        </label>
      </div>
      <br />
      <div>Pay with : {this.state.selectedOption}</div>
      {/* <input onChange={ e => setRentTime(e.target.value) placeholder={"Enter hours"} value={}}/> */}
      <br />
      <button onClick={this.rentCar} className="btn btn-default" type="submit">
        Pay to rent car
      </button>
    </form>
  );
}

export default Payment;
