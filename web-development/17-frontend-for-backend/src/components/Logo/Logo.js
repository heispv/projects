import React from "react";
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import "./Logo.css"

const Logo = () => {
  return (
    <div className="Logo">
      <Tilt>
        <div className="br2 shadow-5">
          <img src={brain} alt='logo'></img>
        </div>
      </Tilt>
    </div>
  );

}

export default Logo;