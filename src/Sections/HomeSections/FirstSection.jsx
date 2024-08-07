import React, { useEffect } from "react";
import gsap from "gsap";
import "./FirstSection.css";

const FirstSection = () => {
  useEffect(() => {
    gsap.fromTo(
      ".title span",
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        skewX: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.1,
      }
    );
  }, []);

  return (
    <div className="first-section">
      <div className="title">
        <span>M</span>
        <span>o</span>
        <span>h</span>
        <span>i</span>
        <span>t</span>
        <span>&nbsp;</span>
        <span>T</span>
        <span>i</span>
        <span>w</span>
        <span>a</span>
        <span>r</span>
        <span>i</span>
        <span>&nbsp;</span>
        <span>D</span>
        <span>e</span>
        <span>v</span>
      </div>
    </div>
  );
};

export default FirstSection;
