import React from "react";
import image from "../images/Vector.png";
const Header = () => {
  return (
    <header className="header">
      <img className="header__vector" src={image} alt="vector" />
    </header>
  );
};

export default Header;
