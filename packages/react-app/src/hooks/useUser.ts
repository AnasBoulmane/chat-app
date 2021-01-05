import { useContext } from "react";
import { RootContext } from "contexts/RootContext";

export function useSocket (event?: string, handler?: Function) {
  const { socket } = useContext(RootContext);
  return event && handler ? socket.on(event, handler) : socket;
}
