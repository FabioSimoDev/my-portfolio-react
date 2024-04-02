import projectFilters from "../../Utils/projectsFilters";
import AdvancedCheckboxesDisplay from "../editor/AdvancedCheckBoxesDisplay";
import ToggleSection from "../common/ToggleSection";

const ProjectsMobileSections = () => {
  return (
    <ToggleSection title={"filters"} open={true} delay="300" heightGrow={false}>
      <AdvancedCheckboxesDisplay checkBoxes={projectFilters} />
    </ToggleSection>
  );
};

export default ProjectsMobileSections;
