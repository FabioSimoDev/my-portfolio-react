import PropTypes from "prop-types";
const Project = ({ project }) => {
  return (
    <div className="md:w-80 sm:w-96 w-80 md:shrink-0 shrink flex flex-col overflow-hidden bg-[#011221] rounded-lg border-2 border-lines-color relative">
      <div className="w-full h-fit">
        <img
          src={project.image}
          alt="project_preview"
          className="w-full h-24 aspect-auto object-cover object-[top]"
        />
      </div>
      <div className="h-full p-5 flex flex-col gap-4 items-start justify-between text-sm border-t border-lines-color">
        <p className="text-text-secondary font-semibold">
          {project.description}
        </p>
        <button className="p-2 bg-gray-700 rounded-lg">
          <a href={project.gitHub} target="_blank">
            view-project
          </a>
        </button>
      </div>
      <div className="absolute top-2 right-2 flex gap-1">
        {project.technologies.map((technology, index) => {
          const Icon = technology.icon;
          return (
            <div
              className="p-1.5 rounded"
              style={{ backgroundColor: technology.iconColor }}
              key={`${technology.id}-${index}-project`}
            >
              <Icon color={"black"} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

Project.propTypes = {
  project: PropTypes.object
};

export default Project;
