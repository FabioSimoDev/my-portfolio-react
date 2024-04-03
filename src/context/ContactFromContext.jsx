import PropTypes from "prop-types";
import { createContext, useState } from "react";

export const ContactFormContext = createContext();

export function ContactFormProvider({ children }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });
  return (
    <ContactFormContext.Provider value={{ form, setForm }}>
      {children}
    </ContactFormContext.Provider>
  );
}

ContactFormProvider.propTypes = {
  children: PropTypes.any
};
