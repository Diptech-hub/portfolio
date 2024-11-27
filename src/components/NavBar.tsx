import React from "react";
import Switch from "./modeSwitch";
import { Link } from "react-router-dom"
import "../style/navBar.css"

const NavBar: React.FC = () => {
  return (
    <div className="navBar">
        <Link to="/"><p>DipTech_</p></Link>
        <Switch />
    </div>
  );
};

export default NavBar;