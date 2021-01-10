import { Conversation, Message, MessageState, User } from "@shared/helpers";
import { mongoConnect } from "helpers/mongo";

// ###################
// ### Fetch Conversation Messages
// ###################

type ConvID = Conversation | { _id: string };
type UserID = User | { _id: string };

export const fetchMessages = async ({ _id }: ConvID): Promise<Message[]> => {
  const mongo = await mongoConnect();
  // TODO: manage pagination
  return mongo.messages.find({ conversation: `${_id}` }).toArray();
};

// ###################
// ### create Messages
// ###################

export const createMessage = async ({ _id }: ConvID, { _id: sended }: UserID, message: string): Promise<Message> => {
  const mongo = await mongoConnect();
  // TODO: manage pagination
  const messageData = {
    message,
    _id: undefined as any,
    sender: sended.toString(),
    conversation: _id.toString(),
    timestamp: new Date(),
    state: MessageState.Sended,
  };
  const result = await mongo.messages.insertOne(messageData);
  return { ...messageData, _id: result.insertedId };
};

// ###################
// ### update Messages
// ###################

export const updateMessage = async ({ _id, ...message }: Message): Promise<Message | undefined> => {
  const mongo = await mongoConnect();
  const result = await mongo.messages.updateOne({ _id }, { $set: message });
  if (!result.modifiedCount) return;
  return { _id, ...message };
};
