import { logger } from "helpers/logger";
import { findUser } from "repositories/users";
import { EventHandlerParams } from "./types";

export async function login ({ event, data, socket }: EventHandlerParams<string>) {
  try {
    logger.info("login");
    const user = await findUser(data);
    socket.setUser(user);
    console.log(socket);
    socket.emit("clientEvent", user._id);
  } catch (e) {
    logger.error(`${event}:${data} -> ${e}`);
  }
}
