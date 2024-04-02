import PropTypes from "prop-types";
import { getProjectsByTechnologies } from "../../Utils/projects";
import Project from "./Project";

const ProjectsDisplay = ({ page }) => {
  return page ? (
    <>
      {getProjectsByTechnologies(page.split(",")).map((project, index) => (
        <Project project={project} key={`${Date.now()}-${index}-project`} />
      ))}
    </>
  ) : null;
};

ProjectsDisplay.propTypes = {
  page: PropTypes.string
};

export default ProjectsDisplay;
