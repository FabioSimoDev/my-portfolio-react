import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiSpring } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiSass } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import technologiesMap from "./technologies";

const projectFilters = [
  {
    title: technologiesMap.REACT,
    description: "A JavaScript library for building user interfaces.",
    icon: FaReact,
    iconColor: "#0ea5e9",
    id: 1
  },
  {
    title: technologiesMap.BOOTSTRAP,
    description:
      "A CSS Framework for developing responsive and mobile-first websites.",
    icon: FaBootstrap,
    iconColor: "#8b14f9",
    id: 2
  },
  {
    title: technologiesMap.TAILWIND,
    description: "A highly customizable utility-first CSS framework.",
    icon: SiTailwindcss,
    iconColor: "#38bdf8",
    id: 3
  },
  {
    title: technologiesMap.SPRING,
    description:
      "A Java platform that provides infrastructure support for developing Java applications.",
    icon: SiSpring,
    iconColor: "#76bb1e",
    id: 4
  },
  {
    title: technologiesMap.HTML,
    description:
      "A markup language for the web that defines the structure of web pages.",
    icon: FaHtml5,
    iconColor: "#e44d26",
    id: 5
  },
  {
    title: technologiesMap.CSS,
    description:
      "A stylesheet language used to describe the presentation of a document written in HTML or XML.",
    icon: FaCss3Alt,
    iconColor: "#214ce5",
    id: 6
  },
  {
    title: technologiesMap.SASS,
    description:
      "A CSS pre-processor, which helps to reduce repetition with CSS and saves time.",
    icon: SiSass,
    iconColor: "#cd669a",
    id: 7
  },
  {
    title: technologiesMap.JAVASCRIPT,
    description:
      "A dynamic programming language that's used for web development, in web applications, for game development, and lots more.",
    icon: IoLogoJavascript,
    iconColor: "#f7e018",
    id: 8
  }
];

export default projectFilters;
