import { motion } from "framer-motion";
import NavBar from "../components/NavBar";
import { PiArrowCircleUpRight } from "react-icons/pi";
import { SiMinutemailer } from "react-icons/si";
import { Link } from "react-router-dom";
import "../style/home.css";

const Home: React.FC = () => {
  const greeting = () => {
    const now = new Date();
    const hours = now.getHours();
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const day = daysOfWeek[now.getDay()];

    let time = "";
    if (hours < 12) {
      time = "morning";
    } else if (hours < 18) {
      time = "afternoon";
    } else {
      time = "evening";
    }

    return { time, day };
  };

  const { time, day } = greeting();

  return (
    <>
      <NavBar />
      <motion.div
        className="heading"
        initial={{ opacity: 0, y: 50 }} // Initial state
        animate={{ opacity: 1, y: 0 }} // Final state
        transition={{ duration: 0.8, ease: "easeInOut" }} // Smooth transition
      >
        <motion.div
          className="greet"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
        >
          <p>
            Good {time}, Happy {day} 😉... I'm
          </p>
        </motion.div>
        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8, ease: "easeInOut" }}
        >
          Oladipupo Babayemi
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8, ease: "easeInOut" }}
          className="details"
        >
          A Front-End Developer <span className="detailSpan"> building scalable and interactive experiences... </span>
        </motion.p>

        <motion.div
          className="connect"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8, ease: "easeInOut" }}
        >
          <Link to="/about">
            <button>
              Explore <PiArrowCircleUpRight />
            </button>
          </Link>
          <a href="mailto:oladipupobabayemi@gmail.com">
            <button>
              Let's talk <SiMinutemailer />
            </button>
          </a>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Home;
