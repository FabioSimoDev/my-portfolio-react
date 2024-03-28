import { useEffect } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const usePageNavigation = (page, mobileFallback, desktopFallback) => {
  const isMobile = useMediaQuery({ query: `(max-width: 768px)` });
  const navigate = useNavigate();

  useEffect(() => {
    if (!page && isMobile)
      navigate({
        search: createSearchParams({ page: mobileFallback }).toString()
      });
    else if (!page && !isMobile)
      navigate({
        search: createSearchParams({ page: desktopFallback }).toString()
      });
  }, [isMobile, navigate, page]);

  return isMobile;
};

export default usePageNavigation;
