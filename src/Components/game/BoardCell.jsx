import PropTypes from "prop-types";
export function BoardCell({ index, isPlaying, handleClick, cell }) {
  return (
    <button
      className="cell aspect-square w-[90px] bg-[#011627] aspect-square text-3xl"
      onClick={isPlaying ? () => handleClick(index) : null}
    >
      {cell}
    </button>
  );
}

BoardCell.propTypes = {
  cell: PropTypes.any,
  handleClick: PropTypes.func,
  index: PropTypes.number,
  isPlaying: PropTypes.bool
};
