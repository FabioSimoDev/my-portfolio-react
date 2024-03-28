import PropTypes from "prop-types";
import { useCallback, useEffect, useState } from "react";
import infoMap from "../../Utils/infoTexts";
import { useSelectedFolder } from "../../helpers/useSelectedFolderContext";
import SyntaxHighlighter from "../common/SyntaxHighlighter";
import CertificatePreview from "../common/CertificatePreview";

export default function Editor({ page }) {
  const { selectedFolder } = useSelectedFolder();

  const showInfo = useCallback(() => {
    return infoMap[selectedFolder?.id] || "";
  }, [selectedFolder]);

  const [content, setContent] = useState(showInfo);

  useEffect(() => {
    setContent(showInfo);
  }, [selectedFolder, showInfo]);

  return (
    <div className="xl:w-[45%] w-full h-full md:h-full border-r border-r-lines-color md:pt-14 pt-2 overflow-y-auto [scrollbar-width:thin] [scrollbar-color:#607B96_transparent]">
      <div className="flex flex-col  bg-primary-bg h-full">
        <div className="w-3/12 flex md:border-t-0 border-t border-r py-1.5 border-lines-color min-w-fit">
          <p className="px-3 text-sm flex justify-between items-center w-full text-icons-color">
            <span className="pe-3 ">{page}</span>
            &#10005;
          </p>
        </div>
        <div className="w-full h-full border-t border-t-lines-color xl:px-5 px-2 py-5 space-y-4">
          <SyntaxHighlighter
            code={content}
            countLine={true}
            className={
              "truncate leading-relaxed [font-size:_clamp(11.5px,0.9vw,18px)] px-3"
            }
          />
          {selectedFolder?.id === "certificates" ? (
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
