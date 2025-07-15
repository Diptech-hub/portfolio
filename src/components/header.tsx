import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import "../style/header.css";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="head">
      <div className="sys">
        <Link to="/" className="headLink">
          Home
        </Link>
        <Link to="/about" className="headLink">
          About
        </Link>
        <Link to="/project" className="headLink">
          Projects
        </Link>
        <Link to="/contact" className="headLink">
          Contact
        </Link>
        <a
          href="https://drive.google.com/file/d/1eyubwlLySyoiF0t9TDIzGyPiWVWPAdHw/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </div>
      <div className="mobileheader">
        <Link to="/" className="headLink">
          DipTech_
        </Link>
        <button className="mobileBtn" onClick={toggleMenu}>
          {isMenuOpen ? <IoMdClose /> : <RxHamburgerMenu />}
        </button>
        {isMenuOpen && (
          <motion.div
            className="mobilebody"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
          >
            <Link to="/about" className="headLink">
              About
            </Link>
            <Link to="/project" className="headLink">
              Projects
            </Link>
            <Link to="/contact" className="headLink">
              Contact
            </Link>
            <a
              href="https://drive.google.com/file/d/1eyubwlLySyoiF0t9TDIzGyPiWVWPAdHw/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Header;
