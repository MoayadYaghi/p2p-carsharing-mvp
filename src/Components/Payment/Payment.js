import React, { Component } from "react";

class Payment extends Component {
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

  payWithMetamask() {
  }

  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Mastercard"
              checked={this.state.selectedOption === "Mastercard"}
              onChange={this.onValueChange}
            />
            Mastercard
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Paypal"
              checked={this.state.selectedOption === "Paypal"}
              onChange={this.onValueChange}
            />
            Paypal
          </label>
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
        <button className="btn btn-default" type="submit">
          Pay
        </button>
      </form>
    );
  }
}

export default Payment;