import { useEffect } from "react";

type Ref = React.MutableRefObject<any>;
export type Handler = (event?: any) => any;

export function useOnClickOutside (refs: Ref | Ref[], handler: Handler) {
  const refList = (Array.isArray(refs) ? refs : [refs]).map(({ current }) => current);
  useEffect(
    () => {
      const listener = (event: any) => {
        // Do nothing if clicking ref's element or descendent elements
        if (refList.some((ref) => ref?.contains(event.target))) return;
        handler(event);
      };

      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);

      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    },
    // eslint-disable-next-line
    [refs, handler],
  );
}
