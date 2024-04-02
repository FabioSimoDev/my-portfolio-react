import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";

const ToggleSection = ({
  title,
  children,
  className,
  delay = "500",
  open = false,
  isMobile = false,
  heightGrow = false
}) => {
  const [isOpen, setIsOpen] = useState(open);
  const navigate = useNavigate();

  const toggle = () => {
    setIsOpen(!isOpen);
    if (!isOpen && isMobile)
      navigate({ search: createSearchParams({ page: title }).toString() });
  };

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  return (
    <>
      {" "}
      <div
        className={`w-full flex md:border-b border-lines-color z-10 md:bg-primary-bg bg-lines-color px-4 md:px-0 ${className}`}
        role="button"
        onClick={toggle}
      >
        <p className="px-3 py-1.5 text-sm">
          <span className="text-xs">{isOpen ? "▼" : "▶"} </span>
          {title}
        </p>
      </div>
      <div
        className={`transition-all ease-in-out grid ${
          heightGrow ? "[height:_calc(100%-90px)]" : null
        } ${
          isOpen
            ? "[grid-template-rows:1fr] mb-4 pt-2"
            : "[grid-template-rows:0fr]"
        }`}
        style={{ transitionDuration: `${delay}ms` }}
      >
        <div
          className={`${
            heightGrow
              ? "overflow-y-auto [scrollbar-width:thin] [scrollbar-color:#607B96_transparent]"
              : "overflow-hidden"
          }`}
        >
          {children}
        </div>
      </div>
    </>
  );
};

ToggleSection.propTypes = {
  children: PropTypes.element,
  className: PropTypes.string,
  delay: PropTypes.number,
  title: PropTypes.string,
  open: PropTypes.bool,
  isMobile: PropTypes.bool,
  heightGrow: PropTypes.bool
};

export default ToggleSection;
