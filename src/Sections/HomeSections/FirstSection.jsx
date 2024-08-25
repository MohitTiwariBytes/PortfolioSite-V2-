import React, { useEffect } from "react";
import { gsap } from "gsap";
import "./FirstSection.css";

const FirstSection = () => {
  useEffect(() => {
    const initAnimations = () => {
      gsap.fromTo(
        ".text-main h1",
        { y: "1700px" },
        { y: "0px", duration: 1.1, ease: "power4.out" }
      );
      gsap.fromTo(
        ".frontend p",
        { y: "1700px" },
        { y: "0px", duration: 1.1, ease: "power4.out" }
      );
      gsap.fromTo(
        ".location p",
        { y: "1700px" },
        { y: "0px", duration: 1.1, ease: "power4.out" }
      );
    };

    initAnimations();
  }, []);

  return (
    <div className="first-section-main">
      <div className="first-section">
        <div className="front-text">
          <div className="text-main">
            <h1 id="front-text">MohitTiwariDev</h1>
          </div>
        </div>
        <div className="bottom">
          <div className="frontend">
            <p>13 yo front-end dev</p>
          </div>
          <div className="location">
            <p>Uttar-Pradesh, India</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
