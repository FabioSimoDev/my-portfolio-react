import { PropTypes } from "prop-types";
import { useEffect } from "react";

const CheckboxItem = ({ checkbox, refCallback, onToggle }) => {
  const Icon = checkbox.icon;

  useEffect(() => {
    refCallback.current.checked = checkbox.isChecked;
  }, [checkbox.isChecked, refCallback]);

  return (
    <li>
      <input
        type="checkbox"
        id={`checkbox-${checkbox.id}`}
        className="hidden peer"
        ref={refCallback}
        onClick={(e) => onToggle(e, checkbox.title)}
      />
      <label
        htmlFor={`checkbox-${checkbox.id}`}
        className="inline-flex items-center justify-between w-full p-5 text-text-secondary border border-lines-color transition-colors duration-300 rounded-lg cursor-pointer peer-checked:border-blue-600 hover:text-gray-600 hover:bg-gray-400 dark:text-gray-400"
      >
        <div className="block">
          <Icon color={checkbox.iconColor} size={26} />
          <div className="w-full text-lg font-semibold">{checkbox.title}</div>
          <div className="w-full text-sm hidden md:block">
            {checkbox.description}
          </div>
        </div>
      </label>
    </li>
  );
};

CheckboxItem.propTypes = {
  checkbox: PropTypes.object.isRequired,
  refCallback: PropTypes.object.isRequired,
  onToggle: PropTypes.func.isRequired
};

export default CheckboxItem;
