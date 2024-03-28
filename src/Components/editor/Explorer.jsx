import PropTypes from "prop-types";
import usePageNavigation from "../../helpers/useAboutNavigation";
import ContactSection from "../common/ContactSection";
import FoldersDisplay from "./FoldersDisplay";
import { useLocation } from "react-router-dom";

export default function Explorer({ page }) {
  const isMobile = usePageNavigation(
    page,
    "personal-info",
    "professional-info"
  );
  const location = useLocation();

  return (
    <div className="md:w-[12.8rem] w-full md:h-full h-fit border-r border-r-lines-color md:pt-14 pt-[3.1rem] shrink-0">
      <div className="flex flex-col bg-primary-bg overflow-hidden mb-5">
        <FoldersDisplay isMobile={isMobile} page={page} location={location} />
        {location?.pathname === "/about" ? (
          <ContactSection isMobile={isMobile} />
        ) : null}
      </div>
    </div>
  );
}

Explorer.propTypes = {
  page: PropTypes.string
};
