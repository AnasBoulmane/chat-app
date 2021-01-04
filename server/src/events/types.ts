import { User } from "entity";
import { Socket } from "socket.io";
import { logger } from "helpers/logger";

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
