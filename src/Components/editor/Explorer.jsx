import PropTypes from "prop-types";
import usePageNavigation from "../../helpers/useAboutNavigation";
import ContactSection from "../common/ContactSection";
import FoldersDisplay from "./FoldersDisplay";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import technologiesMap from "../../Utils/technologies";

export default function Explorer({ page, className }) {
  const { isMobile, searchParams } = usePageNavigation();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/about")
      searchParams(page, "personal-info", "professional-info");
    else if (location.pathname === "/projects")
      searchParams(page, technologiesMap.REACT, technologiesMap.REACT);
  }, [location]);

  console.log("page", page);
  return (
    <div
      className={`md:w-[12.8rem] w-full md:h-full h-fit border-r border-r-lines-color md:pt-14 pt-[3.1rem] shrink-0 overflow-y-hidden ${className}`}
    >
      <div className="h-full flex flex-col bg-primary-bg overflow-hidden mb-5">
        <FoldersDisplay isMobile={isMobile} page={page} location={location} />
        {location?.pathname === "/about" ? (
          <ContactSection isMobile={isMobile} />
        ) : null}
      </div>
    </div>
  );
}

Explorer.propTypes = {
  page: PropTypes.string,
  className: PropTypes.string
};
