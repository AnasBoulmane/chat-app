import { mongoConnect, Mongo } from "helpers/mongo";
import conversationRepositorySpec from "./conversations.specs";
import messageRepositorySpec from "./messages.specs";
import userRepositorySpec from "./users.specs";

describe("repositories: persistence layer test", () => {
  let mongo: Mongo;

  beforeAll(async () => {
    mongo = await mongoConnect();
    mongo = await mongoConnect(); // test the singleton impl
    await mongo.users.deleteOne({ phone: "+212690444444" });
    await mongo.users.deleteOne({ phone: "+212690444455" });
    await mongo.users.deleteOne({ phone: "+(212)690444455" });
    await mongo.users.deleteOne({ phone: "+(212)-690444455" });
  });

  // ###################
  // ### Create Account
  // ###################

  userRepositorySpec();
  conversationRepositorySpec();
  messageRepositorySpec();

  afterAll(async () => await mongo.close());
});
