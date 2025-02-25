import { motion } from "framer-motion";
import { Key } from "react";
import "../style/project.css";
import Header from "./header";
import { FaEye } from "react-icons/fa";
import { LuCode2 } from "react-icons/lu";
import { MdOutlineArrowOutward } from "react-icons/md";
import Transition from "./transition";
import Faculte from "../assets/Faculte.png";
import CareFinder from "../assets/CareFinder.png";
import Socials from "../assets/Socials.png";
import AyoWeb from "../assets/AyoWeb.png";

interface ProjectList {
  id: Key | null | undefined;
  name: string;
  str1: string;
  str2: string;
  link1: string;
  link2: string;
  image: string;
  alt: string;
}

const projects: ProjectList[] = [
  {
    id: 1,
    name: "Faculte",
    str1: "A content management system (CMS) designed to streamline the administration and presentation of educational content",
    str2: "REACTJS + TYPESCRIPT + REDUX + FIRESTORE + CSS",
    link1: "https://github.com/Diptech-hub/faculte/",
    link2: "https://faculte.netlify.app/",
    image: Faculte,
    alt: "Faculte image",
  },
  {
    id: 2,
    name: "CareFinder",
    str1: "A web platform designed to help users locate healthcare providers within their geographical region",
    str2: "REACTJS + TYPESCRIPT + FIRESTORE + TailwindCSS",
    link1: "https://github.com/Diptech-hub/careFinder/",
    link2: "https://carefinder-health.vercel.app/",
    image: CareFinder,
    alt: "CareFinder image",
  },
  {
    id: 3,
    name: "Socials",
    str1: "A web platform designed to fetch X public metrics and display it in a graphical way",
    str2: "NEXTJS + TYPESCRIPT + TailwindCSS + ChartJS",
    link1: "https://github.com/Diptech-hub/socials/",
    link2: "https://dip-social.netlify.app/",
    image: Socials,
    alt: "Socials image",
  },
  {
    id: 4,
    name: "AyoWeb",
    str1: "A UI/UX Designers portfolio",
    str2: "REACTJS + CSS + FRAMER-MOTION",
    link1: "https://github.com/Diptech-hub/ayoWeb/",
    link2: "https://ayobamiweb.netlify.app/",
    image: AyoWeb,
    alt: "AyoWeb image",
  },
];

const Project: React.FC = () => {
  return (
    <div>
      <Header />
      <motion.div
        className="project"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Projects
        </motion.h1>
        <motion.p
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Some notable projects I've built include:
        </motion.p>
        <motion.div
          className="projectList"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                delayChildren: 0.6,
                staggerChildren: 0.3,
              },
            },
          }}
        >
          <ul>
            {projects.map((project) => (
              <motion.li
                key={project.id}
                whileHover={{
                  translateY: -10,
                  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
                }}
                whileTap={{ scale: 0.98 }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <img src={project.image} alt={project.alt} loading="lazy" />
                <div className="projectDetails">
                  <p>{project.name}</p>
                  <p>{project.str1}</p>
                  <p>{project.str2}</p>
                  <div className="projectlink">
                    <motion.a
                      href={project.link1}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, color: "#5D8AA8" }}
                    >
                      <LuCode2 />
                      Code
                    </motion.a>
                    {project.link2 && (
                      <motion.a
                        href={project.link2}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, color: "#5D8AA8" }}
                      >
                        <FaEye />
                        Live
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>
        <motion.a
          href="https://github.com/Diptech-hub?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="others"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          whileHover={{ scale: 1.1, color: "#5D8AA8" }}
        >
          Others <MdOutlineArrowOutward />
        </motion.a>
      </motion.div>
    </div>
  );
};

const ProjectWithTransition = () => <Transition OgComponent={Project} />;

export default ProjectWithTransition;
