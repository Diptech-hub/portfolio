import { Key } from "react";
import "../style/project.css";
import Header from "./header";
import { FaEye } from "react-icons/fa";
import { LuCode2 } from "react-icons/lu";
import { MdOutlineArrowOutward } from "react-icons/md";
import Transition from "./transition";

interface ProjectList {
  id: Key | null | undefined;
  name: string;
  str1: string;
  str2: string;
  link1: string;
  link2: string;
}

const projects: ProjectList[] = [
  {
    id: 1,
    name: "Faculte",
    str1: "A content management system (CMS) designed to streamline the administration and presentation of educational content",
    str2: "REACTJS + TYPESCRIPT + REDUX + FIRESTORE + CSS",
    link1: "https://github.com/Diptech-hub/faculte/",
    link2: "https://faculte.netlify.app/",
  },
  {
    id: 2,
    name: "CareFinder",
    str1: "A web platform desinged to help users locate healthcare providers within their geographical region",
    str2: "REACTJS + TYPESCRIPT + FIRESTORE + TailwindCSS",
    link1: "https://github.com/Diptech-hub/careFinder/",
    link2: "https://carefinder-health.vercel.app/",
  },
  {
    id: 3,
    name: "Socials",
    str1: "A web platform desinged to fetch X public metrics and display it in a graphical way",
    str2: "REACTJS + TYPESCRIPT + TailwindCSS + ChartJS",
    link1: "https://github.com/Diptech-hub/socials/",
    link2: "",
  },
  {
    id: 4,
    name: "AyoWeb",
    str1: "A UI/UX Designers portfolio",
    str2: "REACTJS + CSS + FRAMER-MOTION",
    link1: "https://github.com/Diptech-hub/ayoWeb/",
    link2: "https://ayobamiweb.netlify.app/",
  },
];

const Project: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="project">
        <h1>Projects</h1>
        <p>Some notable projects I've built or contributed to include:</p>
        <div className="projectList">
          <ul>
            {projects.map((project) => (
              <li key={project.id}>
                <p>{project.name}</p>
                <p>{project.str1}</p>
                <p>{project.str2}</p>
                <div className="projectlink">
                  <a
                    href={project.link1}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LuCode2 />
                    See code
                  </a>
                  <a
                    href={project.link2}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaEye />
                    See live
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <a
          href="github.com/Diptech-hub/"
          target="_blank"
          rel="noopener noreferrer"
          className="others"
        >
          Others <MdOutlineArrowOutward />
        </a>
      </div>
    </div>
  );
};

const ProjectWithTransition = () => <Transition OgComponent={Project} />;

export default ProjectWithTransition;
