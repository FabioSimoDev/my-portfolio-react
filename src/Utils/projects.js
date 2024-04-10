import projectFilters from "./projectsFilters";
import EduShareScreen from "../assets/projects/EduShare/EduShareScreen.png";
import SpotifyCloneScreen from "../assets/projects/SpotifyClone/SpotifyCloneScreen.jpeg";
import EpicodeBenchmarkClone from "../assets/projects/EpicodeBenchmarkClone/EpicodeBenchmarkClone.jpeg";
import NetflixClone from "../assets/projects/NetflixClone/NetflixClone.jpeg";
import technologiesMap from "./technologies";

const filterTechnologies = (technologies) => {
  return projectFilters.filter((technology) =>
    technologies.includes(technology.title)
  );
};

export const getProjectsByTechnologies = (technologies) => {
  // Filtra i progetti che corrispondono esattamente a tutte le tecnologie fornite
  const exactMatchProjects = projects.filter((project) =>
    project.technologies.every((tech) => technologies.includes(tech.title))
  );

  // Filtra i progetti che hanno almeno una delle tecnologie fornite (escludendoq i match esatti)
  const partialMatchProjects = projects
    .filter((project) =>
      project.technologies.some((tech) => technologies.includes(tech.title))
    )
    .filter((project) => !exactMatchProjects.includes(project));

  //unisce in ordine di corrispondenza esatta
  return exactMatchProjects.concat(partialMatchProjects);
};

const projects = [
  {
    title: "EduShare",
    description: "A social media for sharing school notes",
    technologies: filterTechnologies([
      technologiesMap.REACT,
      technologiesMap.TAILWIND,
      technologiesMap.SPRING
    ]),
    image: EduShareScreen,
    gitHub: "https://github.com/FabioSimoDev/CapstoneProject"
  },
  {
    title: "Spotify Clone",
    description: "A working clone of Spotify",
    technologies: filterTechnologies([
      technologiesMap.BOOTSTRAP,
      technologiesMap.HTML,
      technologiesMap.CSS,
      technologiesMap.JAVASCRIPT
    ]),
    image: SpotifyCloneScreen,
    gitHub: "https://github.com/FabioSimoDev/team4BW2/tree/main"
  },
  {
    title: "Epicode Benchmark Clone",
    description: "A working clone of Epicode Benchmark page",
    technologies: filterTechnologies([
      technologiesMap.HTML,
      technologiesMap.CSS,
      technologiesMap.JAVASCRIPT
    ]),
    image: EpicodeBenchmarkClone,
    gitHub: "https://github.com/FabioSimoDev/team4BW"
  },
  {
    title: "Netflix clone",
    description: "A clone of Netflix.com",
    technologies: filterTechnologies([
      technologiesMap.HTML,
      technologiesMap.SASS,
      technologiesMap.JAVASCRIPT,
      technologiesMap.BOOTSTRAP
    ]),
    image: NetflixClone,
    gitHub:
      "https://github.com/FabioSimoDev/U2-W2-progetto-settimanale/tree/main"
  }
];

export default projects;
