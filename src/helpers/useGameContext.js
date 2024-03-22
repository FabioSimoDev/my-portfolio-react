import { useContext } from "react";
import { GameContext } from "../context/GameContext";

export const useGame = () => {
  const context = useContext(GameContext);

  if (context === undefined) {
    throw new Error("useGame dovrebbe essere usato in un 'GameProvider'");
  }

  return context;
};
