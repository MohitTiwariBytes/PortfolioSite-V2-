import "./App.css";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import myImage from "./assets/myImage.png";
import Button from "./Components/Button";
import Cursor from "./Components/CustomCursor";

function App() {
  useEffect(() => {
    const h1Elements = document.querySelectorAll(".item h1");
    const wrapperH1Elements = document.querySelectorAll(".wrapper h1");
    const navbar = document.getElementById("navbar");


    function animateFromTop() {
      const introPage = document.getElementById("intro-page");
      const mainPage = document.getElementById("main-page");
      let tl = gsap.timeline({ ease: "power4.inOut" });

      tl.set(".transition-container .tile", { pointerEvents: "none" });
      tl.to(".transition-container .tile", {
        duration: 0.4,
        height: "100%",
        top: "0%",
        delay: 0.2,
        stagger: 0.05,
      });
      tl.to(".transition-container .tile", {
        duration: 0.4,
        height: "100%",
        top: "100%",
        delay: 0.2,
        stagger: -0.05,
      });
      tl.set(".transition-container .tile", { top: "0", height: "0" });
      tl.set(".transition-container .tile", { pointerEvents: "all" });

      tl.to(introPage, {
        duration: 0.5,
        height: "0%",
        onComplete: () => {
          introPage.style.display = "none";
          gsap.fromTo(
            wrapperH1Elements,
            {
              top: "1000px",
              y: "1700px",
            },
            {
              top: "0px",
              y: "0px",
              duration: 1,
              ease: "power4.out",
              stagger: 0.1,
            }
          );

          gsap.fromTo(
            navbar,
            {
              top: "-1000px",
              y: "-1000px",
            },
            {
              top: "0px",
              y: "0px",
              duration: 1,
              ease: "power4.out",
              stagger: 0.1,
            }
          );
        },
      });
    }


    const timeline = gsap.timeline();
    h1Elements.forEach((h1, index) => {
      timeline
        .set(h1, { opacity: 0, visibility: "hidden" })
        .to(h1, { opacity: 1, visibility: "visible", duration: 0 })
        .to(h1, { duration: 0.1 })
        .to(h1, { opacity: 0, visibility: "hidden", duration: 0 });
    });
    timeline.add(() => animateFromTop(), `+=0.3`);
  }, []);

  return (
    <div className="main-home-page">
      <div className="bg"></div>
      <Cursor></Cursor>
      <div className="home-page">
        <div id="intro-page" className="intro-page">
          {/* I got this transition from codepen.... */}
          <div className="transition-container from-top"> 
            <span className="tile"></span>
            <span className="tile"></span>
            <span className="tile"></span>
            <span className="tile"></span>
            <span className="tile"></span>
            <span className="tile"></span>
          </div>
          {/* codepen code ends */}
          <div className="item"> 
            <h1>Hello!</h1>
            <h1>नमस्ते</h1>
            <h1>こんにちは</h1>
            <h1>Hola!</h1>
            <h1>你好</h1>
            <h1>안녕하세요</h1>
            <h1>Ciao!</h1> <h1>Hello!</h1>
            <h1>नमस्ते</h1>
            <h1>こんにちは</h1>
            <h1>Hola!</h1>
            <h1>你好</h1>
            <h1>안녕하세요</h1>
            <h1>Ciao!</h1>
            <h1>Salut!</h1>
            <h1>Olá!</h1>
            <h1>Hallo!</h1>
            <h1>Shalom!</h1>
            <h1>Zdravo!</h1>
            <h1>Γειά σου!</h1>
            <h1>@#%$^!&!</h1>
          </div>
        </div>

        <div id="main-page" className="main-page">
          <div id="navbar" className="navbar">
            <div className="left">
              <h1>MohitTiwariDev</h1>
            </div>
            <div className="nav-items">
              <span>HOME</span>
              <span>ABOUT</span>
              <span>CONTACT</span>
            </div>
          </div>
          <div className="first-section">
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
