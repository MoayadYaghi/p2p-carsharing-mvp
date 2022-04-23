import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import PaymentComp from "../Components/Payment/Payment";
import Footer from "../Components/Footer/Footer";

const Payment = () => {
  return (
    <div className="App">
      <Navbar />
      <PaymentComp />
      <Footer />
    </div>
  );
};

export default Payment;