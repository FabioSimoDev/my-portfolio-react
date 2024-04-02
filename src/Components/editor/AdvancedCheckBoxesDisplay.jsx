import PropTypes from "prop-types";
import useSetParams from "../../helpers/useSetParams";
import CheckboxItem from "./CheckboxItem";
import useCheckboxRefs from "../../helpers/useCheckboxRefs";
import useToast from "../../helpers/useToastContext";
import Alert from "../common/Alert";
import alertTypes from "../../Utils/alertTypes";
const AdvancedCheckboxesDisplay = ({ checkBoxes }) => {
  const { setParams, pageParam } = useSetParams();
  const checkBoxRef = useCheckboxRefs(checkBoxes);
  const toast = useToast();

  const toggleCheckbox = (e, title) => {
    if (pageParam === title) {
      e.preventDefault();
      toast.open(
        <Alert
          title="errore"
          type={alertTypes.ERROR}
          content="assicurati di lasciare almeno un filtro per la ricerca"
        />
      );
      return;
    }
    const newPageParam = pageParam.includes(title)
      ? pageParam
          .split(",")
          .filter((filter) => filter !== title)
          .join(",")
      : [pageParam, title].join(",");
    setParams("page", newPageParam);
  };

  if (!checkBoxes) return null;

  return (
    <ul className="grid w-full gap-6 md:grid-cols-1 sm:grid-cols-3 grid-cols-2 px-3">
      {checkBoxes.map((checkbox, index) => {
        const isChecked = pageParam
          ?.toLowerCase()
          .includes(checkbox.title.toLowerCase());
        return (
          <CheckboxItem
            key={index}
            checkbox={{ ...checkbox, isChecked }}
            refCallback={checkBoxRef.current[index]}
            onToggle={toggleCheckbox}
          />
        );
      })}
    </ul>
  );
};

AdvancedCheckboxesDisplay.propTypes = {
  checkBoxes: PropTypes.arrayOf(PropTypes.object)
};

export default AdvancedCheckboxesDisplay;
