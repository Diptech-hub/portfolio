import React from "react";
import { motion } from "framer-motion";
import "../style/preLoader.css";

const Preloader: React.FC = () => {
  return (
    <motion.div
      className="preloader"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      <motion.p
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
      >
        DipTech_
      </motion.p>
    </motion.div>
  );
};

export default Preloader;
