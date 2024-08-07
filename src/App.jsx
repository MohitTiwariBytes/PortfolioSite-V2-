import "./App.css";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
        </Routes>
    </BrowserRouter>    
  );
}

export default App;
