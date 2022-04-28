import React, { Component } from "react";
import CarRentalContract from "./../../artifacts/contracts/Carsharing.sol/CarRentalContract.json"
import CarsList from "../../Assets/Cars/response.json";


class Payment extends Component {
  url = window.location.href;
  carId = this.url.split("/")[4];

  constructor() {
    super();
    this.state = {
      name: "React"
    };
    this.onValueChange = this.onValueChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  onValueChange(event) {
    this.setState({
      selectedOption: event.target.value
    });
  }

  formSubmit(event) {
    event.preventDefault();
    console.log(this.state.selectedOption)
    this.pay()
  }

  pay() {
    switch(this.state.selectedOption) {
        case 'Mastercard': ; break
        case 'Paypal': ; break
        case 'Metamask': this.payWithMetamask(); break
        default: this.payWithMetamask()
    }
  }

  // from .sol file
  setRentTime(rentTime) {

  }

  payWithMetamask() {
  }

  reserveCar() {
    this.payWithMetamask()
    let newCarsList = Object.values(CarsList)[0].forEach( car => {
      if (car.id == this.carId)
        car.reserved = true
    })
    this.updateAvailableCars(newCarsList)
  }

  updateAvailableCars() {

  }

  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <div className="radio">
        </div>
        <div className="radio">
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
        <div>
          Selected option is : {this.state.selectedOption}
        </div>
        {/* <input onChange={ e => setRentTime(e.target.value) placeholder={"Enter hours"} value={}}/> */}
        {/* onClick =  */}
        <button className="btn btn-default" type="submit">
          Pay
        </button>
      </form>
    );
  }
}

export default Payment;