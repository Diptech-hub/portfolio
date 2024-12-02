import React from "react";
import { Link } from "react-router-dom"
import "../style/navBar.css"

const NavBar: React.FC = () => {
  return (
    <div className="navBar">
        <Link to="/"><p>DipTech_</p></Link>
    </div>
  );
};

export default NavBar;