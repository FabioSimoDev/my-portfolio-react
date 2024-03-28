import PropTypes from "prop-types";
import folders from "../../Utils/folders";
import Folder from "../editor/Folder";
import ToggleSection from "../common/ToggleSection";

const AboutMobileSections = ({ page }) => {
  return (
    <div className="flex flex-col gap-1 pb-1">
      {Object.keys(folders).map((section, index) => {
        return (
          <ToggleSection
            title={section}
            open={page === section}
            key={index}
            isMobile={true}
          >
            {folders[section]?.map((folder, folderIndex) => (
              <Folder
                key={folder.id}
                folder={folder}
                selected={section === page && folderIndex === 0}
              />
            ))}
          </ToggleSection>
        );
      })}
    </div>
  );
};

AboutMobileSections.propTypes = {
  page: PropTypes.string
};

export default AboutMobileSections;
