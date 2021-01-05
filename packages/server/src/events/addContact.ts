import { logger } from "helpers/logger";
import { findUser } from "repositories/users";
import { EventHandlerParams } from "./types";

export async function addContact ({ event, data, socket }: EventHandlerParams<string>) {
  try {
    logger.info("addContact");
    console.log({ socketUser: socket.user });
  } catch (e) {
    logger.error(`${event}:${data} -> ${e}`);
  }
}
