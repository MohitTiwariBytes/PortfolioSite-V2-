import React, { useRef, useEffect, useState } from "react";
import "./Button.css";
import gsap from "gsap";

const Button = ({ onClick, text }) => {
  const hamRef = useRef(null);
  const buttonRef = useRef(null);
  const [padding, setPadding] = useState(0);

  const handleMouseMove = (event) => {
    const rect = buttonRef.current.getBoundingClientRect();
    const mouseX = event.clientX - rect.left - rect.width - 20;
    const mouseY = event.clientY - rect.top - rect.height / 2 - 60;

    gsap.to(hamRef.current, {
      x: mouseX * 0.6,
      y: mouseY * 0.6,
      ease: "power3.out",
      duration: 0.5,
      padding: "73px",
      onUpdate: () => {
        setPadding(43);
      },
    });
  };

  const handleMouseEnter = () => {
    buttonRef.current.addEventListener("mousemove", handleMouseMove);
  };

  const handleMouseLeave = () => {
    buttonRef.current.removeEventListener("mousemove", handleMouseMove);

    gsap.to(hamRef.current, {
      x: 0,
      y: 0,
      padding: "0px",
      scale: 2,
      ease: "power3.out",
      duration: 0.5,
      onUpdate: () => {
        setPadding(0);
      },
    });
  };

  useEffect(() => {
    const buttonElement = buttonRef.current;
    buttonElement.addEventListener("mouseenter", handleMouseEnter);
    buttonElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      buttonElement.removeEventListener("mouseenter", handleMouseEnter);
      buttonElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="main-button">
      <button ref={buttonRef} onClick={onClick}>
        <span className={padding !== 0 ? "text-black" : ""}>{text}</span>
        <div ref={hamRef} className="circle"></div>
      </button>
    </div>
  );
};

export default Button;
