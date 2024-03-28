import PropTypes from "prop-types";
import { IoMailSharp } from "react-icons/io5";
import ToggleSection from "./ToggleSection";
import SyntaxHighlighter from "./SyntaxHighlighter";
import { FaPhoneAlt } from "react-icons/fa";
import { email } from "../../Utils/contacts";
import { useClipboard } from "../../helpers/useClipboard";
import { useEffect } from "react";
import useToast from "../../helpers/useToastContext";
import Alert from "./Alert";
import alertTypes from "../../Utils/alertTypes";

const ContactSection = ({ isMobile }) => {
  const { copyToClipboard, success, isError, error } = useClipboard();
  const toast = useToast();

  useEffect(() => {
    if (!success && !isError) return;
    toast.open(
      <Alert
        title={success ? "copiato" : "errore"}
        content={success ? "email copiata negli appunti" : error.message}
        type={success ? alertTypes.SUCCESS : alertTypes.ERROR}
      />,
      3500
    );
  }, [success, error, isError]);
  return (
    <ToggleSection
      title={"contacts"}
      delay={200}
      className={"md:border-t"}
      open={!isMobile}
    >
      <div className="flex flex-col gap-3 select-text text-icons-color overflow-hidden">
        <div
          className="px-3 flex items-center gap-2 cursor-pointer"
          onClick={() => copyToClipboard(email)}
        >
          <IoMailSharp size={18} />
          <SyntaxHighlighter
            code={isMobile ? `// ${email}` : "// click to copy"}
            className={"text-xs"}
          />
        </div>
        <div className="px-3 flex items-center gap-2">
          <FaPhoneAlt size={18} />
          <SyntaxHighlighter className="text-xs" code={"// +39 3484608939"} />
        </div>
      </div>
    </ToggleSection>
  );
};

ContactSection.propTypes = {
  isMobile: PropTypes.bool
};

export default ContactSection;
