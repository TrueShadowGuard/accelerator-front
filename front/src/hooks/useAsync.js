import { useCallback, useState } from "react";

const useAsync = (asyncFunction) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);

  const execute = useCallback(
    async (...params) => {
      try {
        setLoading(true);
        const response = await asyncFunction(...params);
        if (response === undefined || response === null) {
          setError("Response is undefined");
        } else {
          setResult(response);
        }
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    },
    [asyncFunction]
  );

  return { error, result, loading, execute, setResult };
};

export default useAsync;
