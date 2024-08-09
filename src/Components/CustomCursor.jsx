import React, { useState, useEffect, useRef } from "react";
import "../App.css"

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="cursor"
      style={{
        position: "absolute",
        top: position.y,
        left: position.x,
        width: "20px",
        height: "20px",
        backgroundColor: "rgb(241, 241, 42)",
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: 10000000,
        mixBlendMode: "difference",
      }}
    />
  );
};

export default Cursor;
