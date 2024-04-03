import { useState, useCallback } from "react";
import emailjs from "@emailjs/browser";

const useSendEmail = () => {
  const [status, setStatus] = useState({
    isSuccess: false,
    isError: false,
    error: null
  });

  const sendEmail = useCallback((form) => {
    emailjs
      .sendForm(
        "service_wn32ndq",
        "template_xfquczp",
        form.current,
        "qFIVkOsIMnNTwZASn"
      )
      .then(
        () => {
          setStatus({
            isSuccess: true,
            isError: false,
            error: null
          });
        },
        (error) => {
          setStatus({
            isSuccess: false,
            isError: true,
            error: error.text
          });
        }
      );
  }, []);

  return [sendEmail, status];
};

export default useSendEmail;
