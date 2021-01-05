import { Collection, Db, MongoClient } from "mongodb";
import { User, Message, Conversation } from "entity";

export interface Mongo {
  users: Collection<User>;
  messages: Collection<Message>;
  conversations: Collection<Conversation>;
  close: () => Promise<void>;
}

let mongo: Mongo | undefined;

const connect = async ({ db: dbName = "chat" } = {}): Promise<[MongoClient, Db]> => {
  if (mongo) throw new Error("mongo client alredy popilated");
  const client = new MongoClient(process.env.EXPRESS_APP_ATLAS_URI || "no ATLAS_URI", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();
  const db = client.db(dbName);

  // perform actions on the collection object
  return [client, db];
};

export const mongoConnect = async (): Promise<Mongo> => {
  const [client, db] = !mongo ? await connect() : [{} as MongoClient, {} as Db];

  mongo = mongo || {
    users: db.collection<User>("users"),
    messages: db.collection<Message>("messages"),
    conversations: db.collection<Conversation>("conversations"),
    close: () => {
      mongo = undefined;
      return client.close();
    },
  };

  return mongo;
};
