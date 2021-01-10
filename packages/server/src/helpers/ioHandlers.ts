import { User } from "@shared/helpers";
import { EventHandler, UserSocket } from "events/types";
import { logger } from "helpers/logger";
import { Socket } from "socket.io";

export const ioHandlers = (handlers: (us: UserSocket) => void) => {
  return (socket: Socket) => {
    const _Socket = socket as any;

    _Socket.__proto__.setUser = (user: User) => {
      _Socket.user = user;
    };

    _Socket.__proto__.use = <T>(event: string, handler: EventHandler<T>): void => {
      _Socket.on(event, (...data: any[]) =>
        handler({ event, data: ((data.length === 1 ? data[0] : data) as any) as T, socket: _Socket }),
      );
    };

    logger.info(`we have new connection: ${socket.id}`);
    handlers(_Socket);
    socket.on("disconnect", () => logger.info(`User ${socket.id} had left!!`));
  };
};
