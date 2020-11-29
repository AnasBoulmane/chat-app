import http from "http";
import { logger } from "helpers/logger";
import { Server, Socket } from "socket.io";

export default function socketio (httpServer: http.Server): http.Server {
  const io = new Server(httpServer);

  io.on("connection", (socket: Socket) => {
    logger.debug(`we have new connection: ${socket.id}`);

    socket.on("disconnect", () => logger.debug(`User ${socket.id} had left!!`));
  });

  return httpServer;
}
