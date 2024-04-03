import PropTypes from "prop-types";
import { useCallback, useEffect, useState } from "react";
import infoMap from "../../Utils/infoTexts";
import { useSelectedFolder } from "../../helpers/useSelectedFolderContext";
import SyntaxHighlighter from "../common/SyntaxHighlighter";
import CertificatePreview from "../common/CertificatePreview";
import { useLocation } from "react-router-dom";
import ProjectsDisplay from "./ProjectsDisplay";
import ContactForm from "../contact/ContactForm";

export default function Editor({ page }) {
  const { selectedFolder } = useSelectedFolder();
  const location = useLocation();

  const showInfo = useCallback(() => {
    return infoMap[selectedFolder?.id] || "";
  }, [selectedFolder]);

  const [content, setContent] = useState(showInfo);

  useEffect(() => {
    setContent(showInfo);
  }, [selectedFolder, showInfo]);

  return (
    <div
      className={`${
        location.pathname === "/about" || location.pathname === "/contact"
          ? "xl:w-[45%]"
          : null
      } w-full h-full [height:_calc(100dvh-60px)] border-r border-r-lines-color md:pt-14 pt-2 overflow-y-hidden`}
    >
      <div className="flex flex-col overflow-y-hidden bg-primary-bg h-full">
        <div className="w-3/12 flex md:border-t-0 border-t border-r py-1.5 border-lines-color min-w-fit">
          <p className="px-3 text-sm flex justify-between items-center w-full text-icons-color">
            <span className="pe-3 ">{page?.split(",").join("/")}</span>
            &#10005;
          </p>
        </div>
        <div className="w-full h-full border-t overflow-y-auto [scrollbar-width:thin] [scrollbar-color:#607B96_transparent] border-t-lines-color xl:px-5 px-2 py-5 space-y-4">
          {location.pathname === "/about" ? (
            <SyntaxHighlighter
              code={content}
              countLine={true}
              className={
                "truncate leading-relaxed [font-size:_clamp(11.5px,0.9vw,18px)] px-3"
              }
            />
          ) : location.pathname === "/projects" ? (
            <div className="flex md:flex-row md:flex-wrap lg:justify-start justify-center flex-col md:items-stretch items-center gap-8">
              <ProjectsDisplay page={page} />
            </div>
          ) : location.pathname === "/contact" ? (
            <div className="flex justify-center items-center md:h-[80%] h-full">
              <ContactForm />
            </div>
          ) : null}
          {selectedFolder?.id === "certificates" &&
          location.pathname === "/about" ? (
            <CertificatePreview />
          ) : null}
        </div>
      </div>
    </div>
  );
}

Editor.propTypes = {
  page: PropTypes.string
};
