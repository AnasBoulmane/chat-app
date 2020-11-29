import session from "express-session";
import mongodb from "connect-mongodb-session";
import { logger } from "./logger";

const MongoDBStore = mongodb(session);
const numExpectedSources = 2;

const store = new MongoDBStore(
  {
    uri: process.env.ATLAS_URI || "no ATLAS_URI",
    databaseName: "chat",
    collection: "sessions",
  },
  (error: any) => logger.error(error),
);

store.on("error", (error: any) => logger.error(error));

export default session({
  secret: process.env.SESSION_SECRET || "b83f-462a-be5a-55e3842db547",
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
  },
  store,
  resave: true,
  saveUninitialized: true,
});
