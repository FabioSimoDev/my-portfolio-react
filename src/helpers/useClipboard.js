import { useState } from "react";

export const useClipboard = () => {
  const [success, setSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);

  //TODO: useEffect per rimuovere i valori di success, isError e error ad ogni re-render

  const copyToClipboard = async (content) => {
    setSuccess(false);
    setError(null);
    setIsError(false);
    try {
      await navigator.clipboard.writeText(content);
      setSuccess(true);
    } catch (err) {
      setSuccess(false);
      setIsError(true);
      setError(err);
    }
  };

  return { copyToClipboard, success, isError, error };
};
