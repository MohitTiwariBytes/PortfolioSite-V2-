import "./App.css";
import gsap from "gsap";
import { useEffect } from "react";
import myImage from "./assets/myImage.png";

function App() {
  useEffect(() => {
    const h1Elements = document.querySelectorAll(".item h1");
    const wrapperH1Elements = document.querySelectorAll(".wrapper h1");

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
        },
      });
    }

    const timeline = gsap.timeline();

    // Animation for h1 elements in .item
    h1Elements.forEach((h1, index) => {
      timeline
        .set(h1, { opacity: 0, visibility: "hidden" })
        .to(h1, { opacity: 1, visibility: "visible", duration: 0 })
        .to(h1, { duration: 0.2 })
        .to(h1, { opacity: 0, visibility: "hidden", duration: 0 });
    });
    timeline.add(() => animateFromTop(), `+=0.3`);
  }, []);

  return (
    <div className="main-home-page">
      <div className="home-page">
        <div id="intro-page" className="intro-page">
          <div className="transition-container from-top">
            <span className="tile"></span>
            <span className="tile"></span>
            <span className="tile"></span>
            <span className="tile"></span>
            <span className="tile"></span>
            <span className="tile"></span>
          </div>
          <div className="item">
            <h1>Hello!</h1>
            <h1>नमस्ते</h1>
            <h1>こんにちは</h1>
            <h1>Hola!</h1>
            <h1>你好</h1>
            <h1>안녕하세요</h1>
            <h1>Ciao!</h1>
          </div>
        </div>

        <div id="main-page" className="main-page">
          <div className="textBackground">
            <div className="image">
              <img
                style={{ position: "absolute", zIndex: "100" }}
                height={"800px"}
                src={myImage}
                alt=""
              />
            </div>
            <div className="wrapper">
              <h1>Mohit</h1>
            </div>
            <div className="wrapper">
              <h1>Tiwari</h1>
            </div>
            <div className="wrapper">
              <h1>Dev</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
