import PropTypes from "prop-types";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
export function NavLinkItem({ label, redirectTo, className, onClick }) {
  const location = useLocation();
  const isActive = location.pathname.includes(redirectTo);

  return (
    <div
      className={`py-3.5 px-5 flex items-center hover:bg-gray-800 hover:text-white transition-[background-color] border-b md:border-s border-[#1E2D3D]  ${
        isActive
          ? "md:border-b md:border-b-[#FEA55F] md:border-b-2 text-white"
          : "text-[#607B96] md:border-b-0"
      } ${className}`}
      role="button"
      onClick={onClick}
    >
      <p>
        <NavLink to={redirectTo}>{label}</NavLink>
      </p>
    </div>
  );
}

NavLinkItem.propTypes = {
  label: PropTypes.string,
  redirectTo: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};
