import projectFilters from "../../Utils/projectsFilters";
import AdvancedCheckboxesDisplay from "../editor/AdvancedCheckBoxesDisplay";
import ToggleSection from "../common/ToggleSection";

const ProjectsDesktopSections = () => {
  return (
    <ToggleSection title={"projects"} open={true} delay="300" heightGrow={true}>
      <AdvancedCheckboxesDisplay checkBoxes={projectFilters} />
    </ToggleSection>
  );
};

export default ProjectsDesktopSections;
