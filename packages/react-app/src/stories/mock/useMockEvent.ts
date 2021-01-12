import { useEffect } from "react";

export function useMockEvent (eventName: string, handler: Function, mockingOptions: { data: any }) {
  useEffect(() => {
    handler(mockingOptions.data);
  }, [eventName, handler, mockingOptions]);
}
