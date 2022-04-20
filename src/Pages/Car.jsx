import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import CarDetails from "../Components/Car/CarDetails";
import Footer from "../Components/Footer/Footer";

const CarOverview = () => {
  return (
    <div className="App">
      <Navbar />
      <CarDetails />
      <Footer />
    </div>
  );
};

export default CarOverview;