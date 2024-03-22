import PropTypes from "prop-types";
import { createContext, useState, useEffect } from "react";

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [isGameCompleted, setIsGameCompleted] = useState(false);

  useEffect(() => {
    // sblocco automatico per utenti da mobile
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    if (isMobile) {
      setIsGameCompleted(true);
    }
  }, []);

  return (
    <GameContext.Provider value={{ isGameCompleted, setIsGameCompleted }}>
      {children}
    </GameContext.Provider>
  );
};

GameProvider.propTypes = {
  children: PropTypes.element,
};
