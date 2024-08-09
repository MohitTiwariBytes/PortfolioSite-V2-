import React, { useEffect } from "react";
import "./Home.css";
import Navbar from "../Components/Navbar";
import FirstSection from "../Sections/HomeSections/FirstSection";
import SecondSection from "../Sections/HomeSections/SecondSection";
import ThirdSection from "../Sections/HomeSections/ThirdSection";

const Home = () => {
  return (
    <div className="main-home-page">
      <Navbar />
      <FirstSection />
      <SecondSection />
      <ThirdSection></ThirdSection>
    </div>
  );
};

export default Home;
