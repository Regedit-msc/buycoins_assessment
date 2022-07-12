import { useEffect, useCallback, useState } from 'react';

function useAsync(
  callback: () => Promise<unknown>,
  dependencies: unknown[] = [],
) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [value, setValue] = useState<unknown>();

  const callbackMemoized = useCallback(() => {
    if (dependencies.includes(null) || dependencies.includes(undefined)) return;
    setLoading(true);
    setError(undefined);
    setValue(undefined);
    callback()
      .then(setValue)
      .catch(setError)
      .finally(() => setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);

  useEffect(() => {
    callbackMemoized();
  }, [callbackMemoized]);

  return { loading, error, value };
}

const DEFAULT_OPTIONS = {
  headers: { 'Content-Type': 'application/json' },
};

export function useFetch(
  url: string,
  options = {},
  dependencies: unknown[] = [],
) {
  return useAsync(async () => {
    const res = await fetch(url, { ...DEFAULT_OPTIONS, ...options });
    if (res.ok) return res.json();
    const json = await res.json();
    return Promise.reject(json);
  }, dependencies);
}



