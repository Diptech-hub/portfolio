import { Link } from "react-router-dom";
import "../style/header.css";

const Header: React.FC = () => {
  return (
    <div className="head">
      <Link to="/" className="headLink">
        Home
      </Link>
      <Link to="/about" className="headLink">
        About
      </Link>
      <Link to="/project" className="headLink">
        Projects
      </Link>
      <a
        href="https://docs.google.com/document/d/1kY6S1ati8_IheuajOWiQziSXaa2oL9sOm_plGQtBStA/edit?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        Resume
      </a>
    </div>
  );
};

export default Header;
