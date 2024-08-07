import React, { useState } from 'react';
import "./Navbar.css"

const Navbar = () => {
    const [active, isActive] = useState(false)
    
    const handleClick = () =>{
        isActive(!active)
    }

  return (
    <div className="main-navbar">
        <div className="navbar">
            <h1>MohitTiwariDev</h1>
            <div className="right">
                <div onClick={handleClick} className="hamButton">
                    <div className="line1"></div>
                    <div className="line2"></div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Navbar;
