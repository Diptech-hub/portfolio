import React, { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin, FaTelegramPlane } from "react-icons/fa";
import { FiLink } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import "../style/footer.css";

const Footer: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleFooter = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="footer-container">
      <button className="toggle-button" onClick={toggleFooter}>
        {isExpanded ? <FiLink /> : <FiLink />}
      </button>
      <div className={`foot ${isExpanded ? "expanded" : ""}`}>
        <a
          href="https://github.com/Diptech-hub/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/oladipupo-babayemi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:oladipupobabayemi@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTelegramPlane />
        </a>
        <a
          href="https://x.com/DipTech_"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaXTwitter />
        </a>
      </div>
    </div>
  );
};

export default Footer;
