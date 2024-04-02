import { useEffect, useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const usePageNavigation = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 768px)` });
  const [page, setPage] = useState(null);
  const [mobileFallback, setMobileFallback] = useState(null);
  const [desktopFallback, setDesktopFallback] = useState(null);
  const navigate = useNavigate();

  const searchParams = (page, mobileFallback, desktopFallback) => {
    setPage(page);
    setDesktopFallback(desktopFallback);
    setMobileFallback(mobileFallback);
  };

  useEffect(() => {
    if (!mobileFallback || !desktopFallback) return;
    if (!page && isMobile)
      navigate({
        search: createSearchParams({ page: mobileFallback }).toString()
      });
    else if (!page && !isMobile)
      navigate({
        search: createSearchParams({ page: desktopFallback }).toString()
      });
  }, [page, mobileFallback, desktopFallback]);

  return { isMobile, searchParams };
};

export default usePageNavigation;
