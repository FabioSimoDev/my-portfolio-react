import AboutMobileSections from "../Components/about/AboutMobileSections";
import AboutDesktopSections from "../Components/about/AboutDesktopSections";
import ProjectsDesktopSections from "../Components/projects/ProjectsDesktopSections";
import ProjectsMobileSections from "../Components/projects/ProjectsMobileSections";
import ContactDesktopSections from "../Components/contact/ContactDesktopSections";

const explorerContentConfig = {
  "/about": {
    mobile: AboutMobileSections,
    desktop: AboutDesktopSections
  },
  "/projects": {
    mobile: ProjectsMobileSections,
    desktop: ProjectsDesktopSections
  },
  "/contact": {
    mobile: ContactDesktopSections,
    desktop: ContactDesktopSections
  }
};

export default explorerContentConfig;
