import PropTypes from "prop-types";
import { BoardCell } from "./BoardCell";

export function Board({ board, isPlaying, handleClick }) {
  return (
    <div className="grid grid-cols-3 bg-[#43D9AD]/70 gap-0.5">
      {board.map((cell, index) => (
        <BoardCell
          key={index}
          index={index}
          isPlaying={isPlaying}
          handleClick={handleClick}
          cell={cell}
        />
      ))}
    </div>
  );
}

Board.propTypes = {
  board: PropTypes.array,
  handleClick: PropTypes.func,
  isPlaying: PropTypes.bool,
};
