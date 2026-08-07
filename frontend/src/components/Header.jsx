import React from "react";

import NavBar from "./Main/Components/NavBar/NavBar";

const Header = () => {
  console.log("Header renderizado");
  return (
    <header className="header">
      <NavBar></NavBar>
    </header>
  );
};

export default Header;
