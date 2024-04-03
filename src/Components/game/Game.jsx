import { Board } from "./Board";
import { useEffect, useState } from "react";
import { useGameLogic } from "../../helpers/useGameLogic";
import ChangeGameDifficulty from "./settings/ChangeGameDifficulty";
import { useGame } from "../../helpers/useGameContext";
import LoadingDots from "../common/LoadingDots";

const Game = () => {
  const [selectedOption, setSelectedOption] = useState(
    localStorage.getItem("DIFFICULTY_LEVEL") || "easy"
  );
  const {
    restartGame,
    handleClick,
    winner,
    board,
    play,
    stop,
    isPlaying,
    isThinking,
    winCount
  } = useGameLogic(selectedOption);
  const { setIsGameCompleted, isGameComplete } = useGame();

  useEffect(() => {
    if (winner && !isGameComplete) setIsGameCompleted(winner === "O");
  }, [winner, isGameComplete, setIsGameCompleted]);

  const skipGame = () => {
    localStorage.setItem("skipped", true);
    setIsGameCompleted(true);
  };

  return (
    <div className="w-max flex gap-5 bg-gradient-to-br from-[#175553] via-[#175553] to-[#43D9AD]/10 brightness-110 p-10 border border-[#0C1616] rounded-xl select-none">
      <div className="p-2 flex flex-col gap-10 items-center rounded-lg bg-[#011627]">
        <ChangeGameDifficulty
          className={
            "absolute top-3 right-3 opacity-50 hover:opacity-70 transition-opacity duration-200"
          }
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
        <Board board={board} isPlaying={isPlaying} handleClick={handleClick} />
        {!isPlaying ? (
          <button
            className="bg-[#FEA55F] text-black rounded-lg p-2 text-xs"
            onClick={play}
          >
            start-game
          </button>
        ) : (
          <button
            className="bg-[#FEA55F] text-black rounded-lg p-2 text-xs"
            onClick={stop}
          >
            pause-game
          </button>
        )}
      </div>
      <div className="hidden xl:flex flex-col gap-3">
        <div className="bg-black/20 p-4 rounded-lg">
          <p>{"// click x"}</p>
          <p>{"// to play"}</p>
        </div>
        <div className="p-2 grow flex flex-col justify-between items-start">
          <div>
            <p>{"// won: " + winCount}</p>
          </div>
          <button
            className="p-2 px-4 text-xs border rounded-lg ms-auto hover:bg-white hover:text-black"
            onClick={skipGame}
          >
            skip
          </button>
        </div>
      </div>
      {isThinking && !winner && (
        <div className="absolute bottom-3">
          <LoadingDots />
        </div>
      )}
      {winner && (
        <div className="absolute bottom-0 text-sm">
          <p>{winner === "T" ? "Tie Game!" : "Winner: " + winner}</p>
          <button onClick={restartGame}>Restart Game</button>
        </div>
      )}
    </div>
  );
};

export default Game;
