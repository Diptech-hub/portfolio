import React from "react";
import Switch from "./modeSwitch";
import "../style/navBar.css"

const NavBar: React.FC = () => {
  return (
    <div className="navBar">
        <p>DipTech_</p>
        <Switch />
    </div>
  );
};

export default NavBar;