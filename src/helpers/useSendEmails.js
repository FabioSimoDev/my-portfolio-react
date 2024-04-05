import { useState, useCallback } from "react";
import emailjs from "@emailjs/browser";

const useSendEmail = () => {
  const [status, setStatus] = useState({
    isLoading: false,
    isSuccess: false,
    isError: false,
    error: null
  });

  const sendEmail = useCallback((form) => {
    console.log(status);
    setStatus({
      isLoading: true,
      isSuccess: false,
      isError: false,
      error: null
    });
    emailjs
      .sendForm(
        "service_wn32ndq",
        "template_xfquczp",
        form.current,
        "qFIVkOsIMnNTwZASn"
      )
      .then(
        () => {
          console.log(status);
          setStatus({
            isLoading: false,
            isSuccess: true,
            isError: false,
            error: null
          });
        },
        (error) => {
          console.log(status);
          setStatus({
            isLoading: false,
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
