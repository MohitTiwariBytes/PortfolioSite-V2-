import React from "react";
import myImage from "../assets/Mohit Tiwari.jpeg";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      <div className="about">
        <header className="header">
          <h1>About Me</h1>
        </header>
        <div className="main">
          <section className="profile">
            <div className="profile-image">
              <img src={myImage} alt="" />
            </div>
            <div className="profile-info">
              <h2>Mohit Tiwari</h2>
              <p>Frontend Web Developer</p>
              <p>
                Hello! this is MohitTiwariDev! Glad you found me! I know HTML,
                CSS, JS, React, Node.JS, GSAP, Firebase, Python and Monogo.DB.
                apart from that i love playing Badminton!
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
