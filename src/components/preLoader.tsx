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
      <motion.div
        className="background-anim"
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
      <motion.p
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
      >
        DipTech_
      </motion.p>
    </motion.div>
  );
};

export default Preloader;
