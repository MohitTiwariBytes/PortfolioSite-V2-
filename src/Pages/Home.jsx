import React from "react";
import "./Home.css";
import Navbar from "../Components/Navbar";
import FirstSection from "../Sections/HomeSections/FirstSection";

const Home = () => {
  return (
    <div className="main-home-page">
      <Navbar></Navbar>
      <FirstSection></FirstSection>
    </div>
  );
};

export default Home;
