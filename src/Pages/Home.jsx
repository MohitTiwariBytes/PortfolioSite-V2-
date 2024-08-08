import React, { useEffect } from "react";
import "./Home.css";
import Navbar from "../Components/Navbar";
import FirstSection from "../Sections/HomeSections/FirstSection";
import SecondSection from "../Sections/HomeSections/SecondSection";

const Home = () => {
  return (
    <div className="main-home-page">
      <Navbar />
      <FirstSection />
      <SecondSection />
    </div>
  );
};

export default Home;
