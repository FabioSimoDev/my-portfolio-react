import { useContext } from "react";
import { ContactFormContext } from "../context/ContactFromContext";

const useContactFormContext = () => useContext(ContactFormContext);

export default useContactFormContext;
