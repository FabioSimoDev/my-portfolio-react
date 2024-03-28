import { RiFolder3Fill } from "react-icons/ri";
import PropTypes from "prop-types";
import { useSelectedFolder } from "../../helpers/useSelectedFolderContext";
import { useEffect } from "react";

export default function Folder({ folder, selected }) {
  const { color, title, id } = folder;
  const { setSelectedFolder, selectedFolder } = useSelectedFolder();
  useEffect(() => {
    if (selected) setSelectedFolder(folder);
  }, []);
  return (
    <div
      className={`flex items-center gap-1 px-3 transition-colors duration-100 ${
        selectedFolder?.id === id ? "text-white" : "text-icons-color"
      }`}
      role="button"
      onClick={() => setSelectedFolder(folder)}
    >
      <span className="text-icons-color">&#8250;</span>
      <span> </span>
      <RiFolder3Fill size={16} color={color} />
      <span>{title}</span>
    </div>
  );
}

Folder.propTypes = {
  folder: PropTypes.shape({
    color: PropTypes.string,
    title: PropTypes.string,
    id: PropTypes.string
  }),
  selected: PropTypes.bool
};
