import PropTypes from "prop-types";
import { RiTerminalBoxFill, RiGamepadFill } from "react-icons/ri";
import { FaCircle } from "react-icons/fa";
import { createSearchParams, useNavigate } from "react-router-dom";

export default function SideBar({ page }) {
  const navigate = useNavigate();
  const changepage = (value) => {
    navigate({ search: createSearchParams({ page: value }).toString() });
  };

  return (
    <div className="w-[4rem] h-full hidden md:flex flex-col pt-[4.5rem] items-center text-icons-color gap-7 border-r border-r-lines-color shrink-0">
      <RiTerminalBoxFill
        size={24}
        className={`hover:text-white transition-colors ${
          page === "professional-info" ? "text-white" : null
        }`}
        role="button"
        onClick={() => changepage("professional-info")}
      />
      <div
        className={`hover:text-white transition-colors border-b border-b-2 border-icons-color hover:border-white pb-0.5 ${
          page === "personal-info" ? "text-white border-white" : null
        }`}
        role="button"
        onClick={() => changepage("personal-info")}
      >
        <FaCircle size={20} />
      </div>
      <RiGamepadFill
        size={24}
        className={`hover:text-white transition-colors ${
          page === "hobbies" ? "text-white" : null
        }`}
        role="button"
        onClick={() => changepage("hobbies")}
      />
    </div>
  );
}

SideBar.propTypes = {
  page: PropTypes.string
};
