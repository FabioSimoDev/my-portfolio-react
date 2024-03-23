import PropTypes from "prop-types";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Footer = ({ className }) => {
  return (
    <div
      className={`w-full flex md:flex md:justify-between absolute bottom-0 border-t border-lines-color px-2 select-none text-text-secondary bg-primary-bg ${className}`}
    >
      <div className="flex divide-x divide-lines-color items-center border-r border-lines-color">
        <span className="p-3">Find me in:</span>
        <a
          href="https://www.linkedin.com/in/fabio-simonelli-developer"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3"
        >
          <FaLinkedin color="#607B96" size={24} role="button" />
        </a>
      </div>
      <a
        className="flex items-center border-s border-lines-color md:ps-4"
        href="https://github.com/FabioSimoDev"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="hidden md:inline-block">@FabioSimoDev</span>
        <span className="p-3">
          <FaGithub color="#607B96" size={24} />
        </span>
      </a>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string
};

export default Footer;
