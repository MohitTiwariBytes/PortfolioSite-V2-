import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./SecondSection.css";
import myImage from "../../assets/Mohit Tiwari.jpeg";

const SecondSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const image = imageRef.current;

    const handleMouseMove = (event) => {
      const { clientX: mouseX, clientY: mouseY } = event;
      const { offsetWidth: width, offsetHeight: height } = image;
      const { left, top } = image.getBoundingClientRect();

      const centerX = left + width / 2;
      const centerY = top + height / 2;
      const deltaX = (mouseX - centerX) / width;
      const deltaY = (mouseY - centerY) / height;

      gsap.to(image, {
        duration: 0.5,
        rotationY: deltaX * 20, //rotation
        rotationX: -deltaY * 20,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(image, {
        duration: 0.5,
        rotationX: 0,
        rotationY: 0,
        ease: "power2.out",
      });
    };

    image.addEventListener("mousemove", handleMouseMove);
    image.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      image.removeEventListener("mousemove", handleMouseMove);
      image.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="main-second-section">
      <div className="second-section">
        <div className="left">
          <p>
            <u>Hello!</u> This is <strong>Mohit Tiwari</strong> (aka
            MohitTiwariDev). I am a Front-End Developer based in India, I am{" "}
            <u>13 years old</u> (if I ever forget about updating my age, 6 June
            2011 is my birthday!). In addition to web development, I enjoy
            learning about new technologies and improving my skills.
          </p>
          <p>
            I have worked on various projects including interactive web
            applications, games, and more. Feel free to explore my work and get
            in touch if you have any questions!
          </p>
          <button className="contact-button">Contact Me</button>
        </div>
        <div className="right2">
          <img ref={imageRef} src={myImage} alt="Mohit Tiwari" />
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
