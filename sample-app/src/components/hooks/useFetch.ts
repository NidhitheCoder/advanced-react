import React, { useEffect, useState } from "react";

export const useFetch = (url: string) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>();
  const [error, setError] = useState();

  useEffect(() => {
    // controller helps to abort api url fetch sections body when the api called as much as possible.
    const controller = new AbortController();
    setLoading(true);

    fetch(url, { signal: controller.signal })
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));

    return () => {
      controller.abort();
    };
  }, [url]);

  return { loading, data, error };
};
