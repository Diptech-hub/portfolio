import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin, FaTelegramPlane  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "../style/footer.css"

const Footer: React.FC = () => {
  return (
    <div className="foot">
      <a href="" target="_blank" rel="noopener noreferrer"><AiFillGithub />GitHub</a>
      <a href="" target="_blank" rel="noopener noreferrer"><FaLinkedin />LinkedIn</a>
      <a href="" target="_blank" rel="noopener noreferrer"><FaTelegramPlane />Email</a>
      <a href="" target="_blank" rel="noopener noreferrer"><FaXTwitter />Twitter</a>
    </div>
  );
};

export default Footer;
