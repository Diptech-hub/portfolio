import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
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
import SeniorEase from "../assets/SeniorEase.webp";

interface ProjectList {
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
    name: "SeniorEase Groceries & Errands",
    str1: "SeniorEase Grocery & Errands is a community-first web platform designed to support senior citizens in Sudbury, by offering grocery delivery and essential errand services with care and dignity. ",
    str2: "REACTJS + TYPESCRIPT + FIREBASE + TAILWINDCSS + EMAILJS",
    link1: "https://github.com/Diptech-hub/",
    link2: "https://senioreasegrocery.ca/",
    image: SeniorEase,
    alt: "SeniorEase image",
  },
  {
    name: "Faculte",
    str1: "A content management system (CMS) designed to streamline the administration and presentation of educational content",
    str2: "REACTJS + TYPESCRIPT + REDUX + FIRESTORE + CSS",
    link1: "https://github.com/Diptech-hub/faculte/",
    link2: "https://faculte.netlify.app/",
    image: Faculte,
    alt: "Faculte image",
  },
  {
    name: "CareFinder",
    str1: "A web platform designed to help users locate healthcare providers within their geographical region",
    str2: "REACTJS + TYPESCRIPT + FIRESTORE + TailwindCSS",
    link1: "https://github.com/Diptech-hub/careFinder/",
    link2: "https://carefinder-health.vercel.app/",
    image: CareFinder,
    alt: "CareFinder image",
  },
  {
    name: "Socials",
    str1: "A web platform designed to fetch X public metrics and display it in a graphical way",
    str2: "NEXTJS + TYPESCRIPT + TailwindCSS + ChartJS",
    link1: "https://github.com/Diptech-hub/socials/",
    link2: "https://dip-social.netlify.app/",
    image: Socials,
    alt: "Socials image",
  },
  {
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
  const [visibleCount, setVisibleCount] = useState(4);
  const [loading, setLoading] = useState(false);
  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting && visibleCount < projects.length) {
          setLoading(true);
          setTimeout(() => {
            setVisibleCount((prev) => prev + 4);
            setLoading(false);
          }, 1000);
        }
      },
      { threshold: 1 }
    );

    const currentTarget = observerRef.current; // ✅ capture once

    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) observer.unobserve(currentTarget);
    };
  }, [visibleCount]);

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
        <motion.div className="projectList">
          <ul>
            {projects.slice(0, visibleCount).map((project) => (
              <motion.li key={project.name}>
                <motion.img
                  src={project.image}
                  alt={project.alt}
                  loading="lazy"
                />
                <div className="projectDetails">
                  <p>{project.name}</p>
                  <p>{project.str1}</p>
                  <p>{project.str2}</p>
                  <div className="projectlink">
                    <motion.a
                      href={project.link1}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LuCode2 /> Code
                    </motion.a>
                    {project.link2 && (
                      <motion.a
                        href={project.link2}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaEye /> Live
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
          {loading && (
            <div className="spinnerContainer">
              <div className="spinner" />
            </div>
          )}
          <div ref={observerRef} />
        </motion.div>
        <motion.a
          href="https://github.com/Diptech-hub?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="others"
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
