import http from "http";
import morgan from "morgan";
import express from "express";
import socketio from "helpers/socketio";
import session from "helpers/session";
import { logger } from "helpers/logger";

import api from "routes/App";

const app = express();

const HOST = "127.0.0.1";
const PORT = process.env.NODE_ENV === "test" ? 5000 : process.env.PORT || 8000;

// Middlewares
app.use(morgan("tiny"));
// app.use(session);

// Routing
app.use("/api/v1/", api);
app.use(express.static("public"));

export const server = socketio(http.createServer(app));

server.listen(PORT, () => {
  logger.info(`server listening at http://${HOST}:${PORT}`);
});

export default app;
