import { createRef, useRef } from "react";

const useCheckboxRefs = (checkBoxes) => {
  return useRef(checkBoxes.map(() => createRef()));
};

export default useCheckboxRefs;
