import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import ".././App.css";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Slider from "../Components/Slider/SliderCall";

const HomePage = ({ accounts, setAccounts }) => {
  return (
    <div className="App">
      <Navbar accounts={accounts} setAccounts={setAccounts} />
      <Slider />
      <Footer />
    </div>
  );
};

export default HomePage;