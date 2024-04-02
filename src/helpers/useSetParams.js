import {
  createSearchParams,
  useNavigate,
  useSearchParams
} from "react-router-dom";

const useSetParams = () => {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const pageParam = params.get("page") || null;
  const setParams = (key, value) => {
    navigate({ search: createSearchParams({ [key]: value }).toString() });
  };

  return { setParams, pageParam };
};

export default useSetParams;
