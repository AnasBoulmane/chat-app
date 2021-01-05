import { useEffect, useState } from "react";

export function useLocalStorage<T> (key: string, initialValue?: T) {
  const [value, setValue] = useState<T>(() => {
    const json = localStorage.getItem(key);
    return json !== null ? JSON.parse(json) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
