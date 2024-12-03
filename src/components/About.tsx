import { motion } from "framer-motion";
import Header from "./header";
import Transition from "./transition";
import { FaReact, FaHtml5, FaGitAlt } from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiRedux,
  SiTailwindcss,
  SiCss3,
} from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import "../style/about.css";

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const toolIconVariants = {
    hover: {
      scale: 1.2,
      rotate: 10,
      transition: { type: "spring", stiffness: 200 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      exit={{ opacity: 0 }}
    >
      <Header />
      <motion.div className="about" variants={itemVariants}>
        <motion.h1 variants={itemVariants}>About Me</motion.h1>
        <motion.p variants={itemVariants}>
          I'm <span>Oladipupo Babayemi</span>, a{" "}
          <span>Front-End Developer</span> passionate about building,
          enhancing, and maintaining seamless software solutions. I work
          primarily with <span>Javascript, its frameworks</span> and other
          relevant front-end tools. I excel in collaborating with designers and
          developers to create user interfaces and implementing APIs that align
          with project goals and requirements. With expertise in code reviews
          and troubleshooting, I stay committed to keeping up with emerging
          front-end trends and I combine technical proficiency with design
          creativity to deliver outstanding results. With few years of
          experience as a <span>Front-End Developer</span>, I have learned
          quite a lot about the craft and its best practices.
        </motion.p>
        <br />
        <motion.p variants={itemVariants}>
          Beyond coding, I am a Computer Science graduate. I am a passionate
          photographer who occasionally explores the world of creative design
          with the camera and other creative tools. I actively engage with the
          tech communities, sharing insights and learning from others. In my
          downtime, I enjoy relaxing with music and enriching my perspective
          through reading and podcasts.
        </motion.p>
        <motion.div className="tools" variants={containerVariants}>
          <motion.p variants={itemVariants}>
            Here are some of the tools I've worked with over the years ...
          </motion.p>
          <motion.div className="toolicon" variants={containerVariants}>
            <motion.div variants={toolIconVariants} whileHover="hover">
              <FaReact />
            </motion.div>
            <motion.div variants={toolIconVariants} whileHover="hover">
              <SiTypescript />
            </motion.div>
            <motion.div variants={toolIconVariants} whileHover="hover">
              <RiNextjsLine />
            </motion.div>
            <motion.div variants={toolIconVariants} whileHover="hover">
              <SiJavascript />
            </motion.div>
            <motion.div variants={toolIconVariants} whileHover="hover">
              <SiRedux />
            </motion.div>
            <motion.div variants={toolIconVariants} whileHover="hover">
              <SiTailwindcss />
            </motion.div>
            <motion.div variants={toolIconVariants} whileHover="hover">
              <FaHtml5 />
            </motion.div>
            <motion.div variants={toolIconVariants} whileHover="hover">
              <SiCss3 />
            </motion.div>
            <motion.div variants={toolIconVariants} whileHover="hover">
              <FaGitAlt />
            </motion.div>
            <motion.div variants={toolIconVariants} whileHover="hover">
              <TbBrandFramerMotion />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const AboutWithTransition = () => <Transition OgComponent={About} />;

export default AboutWithTransition;
