import PropTypes from "prop-types";
export function SelectDifficultyLevel({
  selectedOption,
  handleChange,
  selectRef
}) {
  return (
    <div className="relative w-10 aspect-video">
      <select
        className="absolute w-full h-full opacity-0 cursor-pointer bg-[#011627]"
        value={selectedOption}
        onChange={handleChange}
        ref={selectRef}
      >
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
      <div className="pointer-events-none absolute top-0 right-0 flex items-center px-2 text-gray-700">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
}

SelectDifficultyLevel.propTypes = {
  handleChange: PropTypes.func,
  selectRef: PropTypes.object,
  selectedOption: PropTypes.string
};
