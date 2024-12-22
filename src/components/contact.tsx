import React from "react";
import { motion } from "framer-motion";
import Header from "./header";
import Transition from "./transition";
import EmbeddedMap from "./map";
import "../style/contact.css";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const slideUp = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 1, ease: "easeOut" } },
};

const Contact: React.FC = () => {
  return (
    <div>
      <Header />
      <motion.div
        className="contact"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <motion.div
          className="contacthead"
          initial="hidden"
          animate="visible"
          variants={slideUp}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Let's Build Something Amazing Together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Feel free to reach out for freelance projects, job opportunities, or
            collaborations!
          </motion.p>
        </motion.div>

        <motion.div
          className="contactbtm"
          initial="hidden"
          animate="visible"
          variants={slideUp}
        >
          <motion.div
            className="contactlink"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <motion.a
              href="https://github.com/Diptech-hub/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
            >
              GitHub
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/oladipupo-babayemi/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
            >
              LinkedIn
            </motion.a>
            <motion.a
              href="mailto:oladipupobabayemi@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
            >
              Email
            </motion.a>
            <motion.a
              href="https://x.com/DipTech_"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
            >
              X (Twitter)
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <EmbeddedMap />
        </motion.div>
      </motion.div>
    </div>
  );
};

const ContactWithTransition = () => <Transition OgComponent={Contact} />;

export default ContactWithTransition;
