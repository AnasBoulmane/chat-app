import http from "http";
import { Server } from "socket.io";
import { ioHandlers } from "helpers/ioHandlers";
import { UserSocket } from "events/types";
import { addContact } from "events/addContact";
import { login } from "events/login";

export const ioServer = (httpServer: http.Server): http.Server => {
  const io = new Server(httpServer, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
    },
  });

  io.on(
    "connection",
    ioHandlers((socket: UserSocket) => {
      socket.use("login", login);
      socket.use("addContact", addContact);
    }),
  );

  return httpServer;
};
