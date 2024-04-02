import PropTypes from "prop-types";
import explorerContentConfig from "../../Utils/explorerContentConfig";

const FoldersDisplay = ({ isMobile, page, location }) => {
  const device = isMobile ? "mobile" : "desktop";
  const currentContentConfig = explorerContentConfig[location.pathname];

  if (!currentContentConfig) {
    return null;
  }
  const ComponentToRender = currentContentConfig[device];
  if (!ComponentToRender) {
    return null;
  }
  return (
    <aside
      className={`${
        location.pathname !== "/about" && !isMobile ? "h-full" : null
      }`}
    >
      {location.pathname === "/about" ? (
        <ComponentToRender page={page} />
      ) : (
        <ComponentToRender />
      )}
    </aside>
  );
};

FoldersDisplay.propTypes = {
  isMobile: PropTypes.bool,
  page: PropTypes.string,
  location: PropTypes.string
};

export default FoldersDisplay;
