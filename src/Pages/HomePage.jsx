import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import ".././App.css";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Slider from "../Components/Slider/SliderCall";
//import { Link } from "react-router-dom";
// import CarsList from "../Assets/Cars/response.json";

// const test = () => {
//   // CarsList.forEach(car => {console.log(car)})
//   // Object.values(CarsList)[0].forEach(car => {console.log(car.image)})
//   // const carsImages = Object.values(CarsList)[0].map(car => car.image)
//   // console.log(Object.values(CarsList)[0])
//   // Object.values(CarsList)[0].forEach(car => {console.log(car)})
//   // const cars = Object.values(CarsList)[0].map(car => car)
//   // console.log(cars)
//   // const carsImages = Object.values(CarsList)[0].map(car => car.image)
//   // console.log(Object.values(CarsList)[0])
//   // console.log(Object.values(CarsList)[0][0].image)
//   // console.log(Object.keys(CarsList))
//   // console.log(Object.values(CarsList)[0])
//   // console.log(Object.entries(CarsList)[0])
//   // console.log(CarsList)
// };

const HomePage = ({ accounts, setAccounts }) => {
  return (
    <div className="App">
      <Navbar accounts={accounts} setAccounts={setAccounts} />
      <Slider />
        {/* <button onClick={test}>Test</button> */}
      <Footer />
    </div>
  );
};

export default HomePage;