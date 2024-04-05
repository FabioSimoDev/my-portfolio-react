import { useEffect, useRef, useState } from "react";
import useContactFormContext from "../../helpers/useContactFormContext";
import useSendEmail from "../../helpers/useSendEmails";
import useToast from "../../helpers/useToastContext";
import Alert from "../common/Alert";
import alertTypes from "../../Utils/alertTypes";

const ContactForm = () => {
  const ContactForm = useContactFormContext();
  const [isMessageSent, setIsMessageSent] = useState(false);
  const [sendEmail, { isLoading, isSuccess, isError, error }] = useSendEmail();
  const form = useRef();
  const Toast = useToast();

  const handleInputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (value.includes('"')) {
      value = value.replace('"', "'");
      e.target.value = value;
    }

    if (name === "name") {
      value = value
        .split(" ")
        .map((part) => part.charAt(0).toUpperCase() + part.substring(1))
        .join(" ");
    }

    ContactForm.setForm({
      ...ContactForm.form,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isLoading) sendEmail(form);
  };

  useEffect(() => {
    if (isSuccess) setIsMessageSent(true);
  }, [isSuccess]);

  useEffect(() => {
    if (isError)
      Toast.open(
        <Alert
          type={alertTypes.ERROR}
          content={error || "riprova più tardi"}
          title="Errore nell'invio dell'email!"
        />
      );
  }, [isError]);

  return !isMessageSent ? (
    <form
      ref={form}
      onSubmit={handleSubmit}
      className="flex flex-col w-6/12 gap-1 items-start text-text-secondary [&_:is(input[type=text],textarea,input[type=email])]:bg-[#011221] [&_:is(input[type=text],textarea,input[type=email])]:border-lines-color [&_:is(input[type=text],textarea,input[type=email])]:rounded-md [&_:is(input[type=text],textarea,input[type=email])]:outline-none"
    >
      <label>_name</label>
      <input
        type="text"
        name="name"
        required
        className="border border-1 focus:border-2 mb-5 px-3 py-1 w-full"
        onChange={handleInputChange}
      />
      <label>_email</label>
      <input
        type="email"
        name="email"
        required
        className="border border-1 focus:border-2 mb-5 px-3 py-1 w-full"
        onChange={handleInputChange}
      />
      <label>_message</label>
      <textarea
        name="message"
        required
        className="border border-1 focus:border-2 mb-5 px-3 py-1 resize-none w-full"
        onChange={handleInputChange}
        rows={5}
      />
      <input
        type="submit"
        role="button"
        required
        value="submit-message"
        className={`bg-[#1C2B3A] py-2 px-3 rounded-lg text-white text-sm ${
          isLoading ? "cursor-not-allowed" : "cursor-pointer"
        }`}
      />
    </form>
  ) : (
    isMessageSent && (
      <div className="flex flex-col w-8/12 md:w-6/12 gap-1 items-center">
        <h3 className="text-2xl">Thank you! 🤘</h3>
        <p className="text-text-secondary text-center">
          Your message has been accepted. You will recieve answer really soon!
        </p>
        <button
          className="p-2 px-3 rounded-lg mt-7 bg-[#1C2B3A] text-sm"
          onClick={() => setIsMessageSent(false)}
        >
          send-new-message
        </button>
      </div>
    )
  );
};

export default ContactForm;
