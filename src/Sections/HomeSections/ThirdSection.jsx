import React from "react";
import "./ThirdSection.css";

const ThirdSection = () => {
  return (
    <div className="third-section-main">
      <div className="third-section">
        <div className="topProjects">
          <h1>Projects.</h1>
        </div>
        <div className="projects">
          <div className="p1 p">
            <div className="name">
              <h1>Foodzy!</h1>
            </div>
            <div className="info">
              <span>An app that finds recipe for you!</span>
            </div>
          </div>
          <div className="p2 p">
            <div className="name">
              <h1>TeenCodeHub</h1>
            </div>
            <div className="info">
              <span>An community app for teens!</span>
            </div>
          </div>
          <div className="p3 p">
            <div className="name">
              <h1>TheUnclickableButton</h1>
            </div>
            <div className="info">
              <span>
                A game where you'll get a button and then you have to click on
                that button, You'll find out the twist
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
