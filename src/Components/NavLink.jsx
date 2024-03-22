import PropTypes from "prop-types";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
export function NavLinkItem({ label, redirectTo }) {
  const location = useLocation();
  const isActive = location.pathname.includes(redirectTo);

  return (
    <div
      className={`px-4 flex items-center hover:bg-gray-800 hover:text-white transition-[background-color] border-s border-s-[#1E2D3D] ${
        isActive ? "border-b border-b-[#FEA55F] border-b-2" : null
      }`}
      role="button"
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
};
