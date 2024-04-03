import { useCallback, useState } from "react";
import debounce from "../Utils/debounceFunc";

export const useGameLogic = (difficulty) => {
  const emptyBoard = Array(9).fill(null);
  const [board, setBoard] = useState(emptyBoard);
  const [currentPlayer, setCurrentPlayer] = useState("O");
  const [winner, setWinner] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [winCount, setWinCount] = useState(
    Number(localStorage.getItem("won")) || 0
  );
  const randomProbability = {
    easy: 0.5,
    medium: 0.25,
    hard: 0.1
  };
  const debouncedAiMove = useCallback(
    debounce((newBoard) => {
      if (currentPlayer === "O") {
        const bestMove = findBestMove(newBoard);
        if (bestMove !== -1) {
          newBoard[bestMove] = "X"; // AI places its move
          setBoard(newBoard);
          checkWinner(newBoard);
          setCurrentPlayer("O"); // Switch back to human player
        }
      }
      setIsThinking(false);
    }, 1000),
    []
  );
  const [isThinking, setIsThinking] = useState(false);

  const play = () => {
    setIsPlaying(true);
  };

  const stop = () => {
    setIsPlaying(false);
  };

  const evaluate = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a] === "X" ? 10 : -10;
      }
    }
    return 0; // No winner yet
  };

  const minimax = (board, depth, isMaximizing) => {
    let score = evaluate(board);

    if (score === 10) return score - depth;
    if (score === -10) return score + depth;
    if (!board.includes(null)) return 0;

    if (isMaximizing) {
      let best = -Infinity;
      for (let i = 0; i < board.length; i++) {
        if (!board[i]) {
          board[i] = "X";
          best = Math.max(best, minimax(board, depth + 1, false));
          board[i] = null;
        }
      }
      return best;
    } else {
      let best = Infinity;
      for (let i = 0; i < board.length; i++) {
        if (!board[i]) {
          board[i] = "O";
          best = Math.min(best, minimax(board, depth + 1, true));
          board[i] = null;
        }
      }
      return best;
    }
  };

  const findBestMove = (board) => {
    if (Math.random() < randomProbability[difficulty]) {
      const availableMoves = board
        .map((val, idx) => (val === null ? idx : null))
        .filter((val) => val !== null);
      return availableMoves[Math.floor(Math.random() * availableMoves.length)];
    }

    let bestVal = -Infinity;
    let bestMove = -1;
    for (let i = 0; i < board.length; i++) {
      if (!board[i]) {
        board[i] = "X";
        let moveVal = minimax(board, 0, false);
        board[i] = null;
        if (moveVal > bestVal) {
          bestMove = i;
          bestVal = moveVal;
        }
      }
    }
    return bestMove;
  };

  const checkWinner = (board) => {
    let score = evaluate(board);
    if (score === 10 || score === -10) {
      const computerWin = score === 10;
      setWinner(computerWin ? "X" : "O");
      if (!computerWin) {
        localStorage.setItem("won", winCount + 1);
        setWinCount(winCount + 1);
      }
      return true;
    }
    if (!board.includes(null)) {
      setWinner("T");
    }
    return false;
  };

  const handleClick = (index) => {
    if (board[index] || winner) return;
    if (isThinking) return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);
    const isGameFinished = checkWinner(newBoard);
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");

    // AI makes a move right after the player
    if (isGameFinished) return;
    setIsThinking(true);
    debouncedAiMove(newBoard);
  };

  const restartGame = () => {
    setBoard(emptyBoard);
    setCurrentPlayer("O");
    setWinner(null);
  };

  return {
    winner,
    board,
    handleClick,
    restartGame,
    isPlaying,
    play,
    stop,
    isThinking,
    winCount
  };
};
