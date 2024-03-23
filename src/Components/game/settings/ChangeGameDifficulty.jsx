import { SelectDifficultyLevel } from "./SelectDifficultyLevel";
import PropTypes from "prop-types";
import { useRef, useState } from "react";
import CustomConfirmDialog from "../../common/CustomConfirmDialog";
import { IoIosSettings } from "react-icons/io";
import SyntaxHighlighter from "../../common/SyntaxHighlighter";

const ChangeGameDifficulty = ({
  className,
  selectedOption,
  setSelectedOption
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const selectRef = useRef();

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const save = () => {
    localStorage.setItem("DIFFICULTY_LEVEL", selectRef.current.value);
  };

  return (
    <>
      <IoIosSettings onClick={openModal} className={className} role="button" />
      <CustomConfirmDialog
        open={modalOpen}
        onClose={closeModal}
        onConfirm={save}
        title={<SyntaxHighlighter code={"// change difficulty"} />}
      >
        <div className="flex">
          <SyntaxHighlighter
            code={`let difficulty = '${selectedOption}'`}
            className={"text-sm"}
          />
          <SelectDifficultyLevel
            selectedOption={selectedOption}
            handleChange={handleChange}
            selectRef={selectRef}
          />
        </div>
      </CustomConfirmDialog>
    </>
  );
};

ChangeGameDifficulty.propTypes = {
  className: PropTypes.string,
  selectedOption: PropTypes.string,
  setSelectedOption: PropTypes.func
};

export default ChangeGameDifficulty;
