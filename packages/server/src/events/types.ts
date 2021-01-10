import { User } from "@shared/helpers";
import { Socket } from "socket.io";

export type EventHandler<U> = (params: EventHandlerParams<U>) => void;

export interface UserSocket extends Socket {
  user: User;
  setUser (user: User): void;
  use<T> (event: string, handler: EventHandler<T>): void;
}

export interface EventHandlerParams<T> {
  data: T;
  event: string;
  socket: UserSocket;
}
