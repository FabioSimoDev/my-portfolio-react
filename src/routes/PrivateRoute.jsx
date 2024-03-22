import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { useGame } from "../helpers/useGameContext";

const PrivateRoute = ({ children }) => {
  const { isGameCompleted } = useGame();

  const isMobileDevice = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  };

  if (!isGameCompleted && !isMobileDevice()) {
    // renderizza alla pagina home se il gioco non è completato su desktop
    return <Navigate to="/home" />;
  }

  return children;
};

PrivateRoute.propTypes = {
  children: PropTypes.element,
};

export default PrivateRoute;
