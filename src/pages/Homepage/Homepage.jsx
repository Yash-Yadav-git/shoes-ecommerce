import React from "react";
import Navbar from "../../components/Homepage/Navbar/Navbar";
import Hero from "../../components/Homepage/Hero/Hero";
import Footer from "../../components/Homepage/Footer/Footer";
import ProductDisplay from "../../components/Homepage/ProductDisplay/ProductDisplay";
import "./Hompage.css";

const Homepage = () => {
  return (
    <div className="wrappper">
      {/* Navbar Div */}
      <Navbar />
      <Hero />
      <ProductDisplay />
      <Footer />
    </div>
  );
};

export default Homepage;
