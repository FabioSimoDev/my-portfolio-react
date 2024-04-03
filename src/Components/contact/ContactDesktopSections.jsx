import SocialsDisplay from "../common/SocialsDisplay";
import ToggleSection from "../common/ToggleSection";

const ContactDesktopSections = () => {
  return (
    <ToggleSection title={"find-me-also-in"} open={true}>
      <SocialsDisplay />
    </ToggleSection>
  );
};

export default ContactDesktopSections;
