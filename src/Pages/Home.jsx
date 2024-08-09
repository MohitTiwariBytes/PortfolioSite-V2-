import React, { useEffect } from "react";
import "./Home.css";
import Navbar from "../Components/Navbar";
import FirstSection from "../Sections/HomeSections/FirstSection";
import SecondSection from "../Sections/HomeSections/SecondSection";
import ThirdSection from "../Sections/HomeSections/ThirdSection";
import FourthSection from "../Sections/HomeSections/FourthSection";
import CustomCursor from "../Components/CustomCursor";

const Home = () => {
  return (
    <div style={{ height: "100%" }} className="">
      <div className="main-home-page">
        <Navbar />
        <FirstSection />
        <SecondSection />
        <ThirdSection></ThirdSection>
        <FourthSection></FourthSection>
      </div>
    </div>
  );
};

export default Home;
