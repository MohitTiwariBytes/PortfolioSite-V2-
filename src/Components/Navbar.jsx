import React, { useEffect, useState } from "react";
import "./Navbar.css";
import gsap from "gsap";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  useEffect(() => {
    if (active) {
      gsap.fromTo(
        ".navbar",
        {
          height: "150px",
        },
        {
          height: "550px",
          duration: 0.5,
          ease: "power4.out",
          onComplete: () => {
            gsap.fromTo(
              ".ham-items span",
              {
                top: "150px",
                opacity: 0,
                rotate: 200,
              },
              {
                rotate: 0,
                top: "0px",
                opacity: 1,
                duration: 0.5,
                ease: "power4.out",
                stagger: 0.1,
              }
            );
          },
        }
      );
    } else {
      gsap.to(".ham-items span", {
        rotate: 200,
        top: "150px",
        duration: 1,
        opacity: 0,
        ease: "power4.out",
      });
      gsap.to(".navbar", {
        height: "150px",
        duration: 1,
        ease: "power4.out",
      });
    }
  }, [active]);

  return (
    <div className={`main-navbar ${active ? "expanded" : ""}`}>
      <div className="navbar">
        <div className="top">
          <h1>MohitTiwariDev</h1>
          <div className="right">
            <div onClick={handleClick} className="hamButton">
              <div
                id="line1"
                className={active ? "line1 active" : "line1"}
              ></div>
              <div
                id="line2"
                className={active ? "line2 active" : "line2"}
              ></div>
            </div>
          </div>
        </div>
        <div className="ham-items">
          <div className="wrapper">
            <span>Home</span>
          </div>
          <div className="wrapper">
            <span>About</span>
          </div>
          <div className="wrapper">
            <span>Projects</span>
          </div>
          <div className="wrapper">
            <span>Contact</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
