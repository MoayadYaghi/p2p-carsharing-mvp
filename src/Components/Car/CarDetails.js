import React from "react";
import Cars from "../../Assets/Cars/response.json";
import "./CarDetails.scss";
import { Navigate } from "react-router-dom";

class CarDetails extends React.Component {
  PaymentLink = "/Payment";
  carImagePath = ""
  carsImages = "../../Assets/Cars"
  assetsPath = require.context('../../Assets/Cars', false, /\.(png|jpe?g|svg)$/);
  allCars = Object.values(Cars.cars);
  carsIds = this.allCars.map((car) => car.id);
  url = window.location.href;
  carId = this.url.split("/")[4];
  attributes = [];

  constructor(props) {
    super(props);
    this.setCarAttributes()
    let wholeWeek = [];
    let today = new Date();
    let weekDay = today.getDay();
    let add = 0;
    for (let i = 0; i < 6; i++) {
      let monat = today.getMonth() + 1;
      let day = today.getDate();
      if (day < 10) {
        day = "0" + day;
      }
      if (monat < 10) {
        monat = "0" + monat;
      }
      let date = day + "." + monat + "." + today.getFullYear();
      add = 1;
      today.setDate(today.getDate() + add);
      wholeWeek.push(date);
    }

    this.state = {
      car: "",
      image: "",
      vorstellungen: [],
      weekDates: wholeWeek,
      weekDay: weekDay,
      clickedVorstellung: null,
      nextButton: "",
      redirect: false,
    };
  }

  setCarAttributes() {
    this.allCars.map((car, index) => {
      if (car.id == this.carId) {
        Object.entries(car).map((value, key) => {
          if (value[0] === "modelName") {
            this.attributes.push("Model Name: " + value[1]);
          } else if (value[0] === "location") {
            this.attributes.push("Location: " + value[1]);
          } else if (value[0] === "price") {
            this.attributes.push("Cost per hour: " + value[1]);
          } else if (value[0] === "image") {
            // this.carImagePath = this.carsImages.concat(value[1]);
            this.carImagePath = value[1]
            console.log("carImagePath " + this.carImagePath)
          }
        });
      }
    })
  }

  componentDidMount() {
    if (this.carsIds.includes(this.carId)) {
    }
  }

  setRedirect = (event) => {
    this.setState({ redirect: true });
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Navigate to={`Payment`} />;
    }
  };

  render() {
    return (
      <div>
        <h1 className="header"> {this.state.car.name} </h1>
        <div className="wrapper">
          <img alt="Car Imgage" className="carImage" src={require(`../../Assets/Cars${this.carImagePath}`)} />
          {/* <img alt="Car Imgage" className="carImage" src={require(`${this.carsImages}${this.carImagePath}`)} /> */}
          <div className="content">
            <div>
              <div className="CarDetailsHeading">
                Car Details:
                <br></br>
              </div>
              <div className="CarSpecifications">
                {this.attributes.map((attribute, index) => {
                  return (
                    <li key={index}>{attribute}</li>
                  );
                })}
              </div>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <div className="nextButtonWrapper">
                {this.renderRedirect()}
                <button
                  className="nextButton"
                  onClick={this.setRedirect}
                  disabled={false}
                >
                  Proceed to checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CarDetails;
