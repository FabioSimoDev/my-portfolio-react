import PropTypes from "prop-types";
import folders from "../../Utils/folders";
import Folder from "../editor/Folder";
import ToggleSection from "../common/ToggleSection";

const AboutDesktopSections = ({ page }) => {
  return (
    <ToggleSection title={page} open={true}>
      {folders[page]?.map((folder, index) => (
        <Folder key={folder.id} folder={folder} selected={index === 0} />
      ))}
    </ToggleSection>
  );
};

AboutDesktopSections.propTypes = {
  page: PropTypes.string
};

export default AboutDesktopSections;
