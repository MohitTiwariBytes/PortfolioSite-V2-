import React, { useEffect, useState } from "react";
import "./Navbar.css";
import gsap from "gsap";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleClick = () => {
    setActive(!active);
  };

  const handleMouseEnter = (index) => {
    setHoveredItem(index);
    gsap.to(`.ham-items .wrapper:nth-child(${index + 1}) span`, {
      scale: 1.2,
      color: "black",
      duration: 0.3,
      ease: "power2.out",
    });
    gsap.to(`.ham-items span:not(:nth-child(${index + 1}))`, {
      color: "gray",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
    gsap.to(".ham-items span", {
      scale: 1,
      color: "black",
      duration: 0.3,
      ease: "power2.out",
    });
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
                scale: 0.5,
                color: "black",
              },
              {
                rotate: 0,
                top: "0px",
                opacity: 1,
                duration: 0.5,
                ease: "power4.out",
                stagger: 0.1,
                scale: 1,
              }
            );
          },
        }
      );
      gsap.fromTo(
        ".hamButton .line1, .hamButton .line2",
        {
          scaleX: 0,
        },
        {
          scaleX: 1.1,
          duration: 0.5,
          ease: "power4.out",
          stagger: 0.2,
        }
      );
    } else {
      gsap.to(".ham-items span", {
        rotate: 200,
        top: "150px",
        duration: 1,
        opacity: 0,
        scale: 0.5,
        ease: "power4.out",
      });
      gsap.to(".navbar", {
        height: "150px",
        duration: 1,
        ease: "power4.out",
      });
      gsap.to(".hamButton .line1, .hamButton .line2", {
        scaleX: 1,
        duration: 0.5,
        ease: "power4.out",
        stagger: 0.2,
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
            <span
              onMouseEnter={() => handleMouseEnter(0)}
              onMouseLeave={handleMouseLeave}
            >
              Home
            </span>
          </div>
          <div className="wrapper">
            <span
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={handleMouseLeave}
            >
              About
            </span>
          </div>
          <div className="wrapper">
            <span
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={handleMouseLeave}
            >
              Projects
            </span>
          </div>
          <div className="wrapper">
            <span
              onMouseEnter={() => handleMouseEnter(3)}
              onMouseLeave={handleMouseLeave}
            >
              Contact
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
