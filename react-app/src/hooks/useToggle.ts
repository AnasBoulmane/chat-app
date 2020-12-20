import { useCallback, useState } from "react";

export function useToggle (initialValue?: boolean): [boolean, (newValue?: boolean) => void] {
  const [value, setValue] = useState(!!initialValue);
  const toggle = useCallback((newValue?: boolean) => setValue((prev) => newValue ?? !prev), [setValue]);
  return [value, toggle];
}
