import { mongoConnect } from "helpers/mongo";
import { Conversation, User } from "entity";

// ###################
// ### Create Conversation
// ###################

interface ConversationData {
  name?: string;
  type?: "group";
}
type UserID = User | { _id: string };
type ConvID = Conversation | { _id: string };

export const createConversation = async (
  { _id }: UserID,
  { _id: contactID }: UserID,
  data: ConversationData = {},
): Promise<Conversation> => {
  const mongo = await mongoConnect();
  // fetch the tow users from DB
  const [user, contact] = await Promise.all([mongo.users.findOne({ _id }), mongo.users.findOne({ _id: contactID })]);
  // validation
  if (!user) throw new Error("This user number doesn't exists");
  if (!contact) throw new Error("This contact number doesn't exists");
  if (contact.phone === user.phone) throw new Error("You can't add yourself");
  if (!user.contacts.find((c) => c._id.toString() === contactID.toString())) {
    throw new Error("This number doesn't exists in your contacts");
  }
  // insert conversation
  const conversation: Conversation = { ...data, participants: [user, contact], setting: {}, _id: undefined as any };
  const result = await mongo.conversations.insertOne(conversation);
  return {
    ...conversation,
    _id: result.insertedId,
  };
};

// ###################
// ### Delete Conversation
// ###################

export const deleteConversation = async ({ _id }: UserID, { _id: convID }: ConvID): Promise<boolean> => {
  const mongo = await mongoConnect();
  const [user, conversation] = await Promise.all([
    mongo.users.findOne({ _id }),
    mongo.conversations.findOne({ _id: convID }),
  ]);
  // validation
  if (!user) throw new Error("This user doesn't exists");
  if (!conversation) throw new Error("This conversation doesn't exists");

  let { participants } = conversation;
  if (!participants.find((p) => p._id.toString() === `${_id}`)) throw new Error("You cant delete this conversation");

  // remove user from the list of participants
  participants = participants.filter((p) => p._id.toString() !== `${_id}`);

  // if it's a group conversation
  if (participants.length > 1) {
    // quit the conversation
    return !!(await mongo.conversations.updateOne({ _id: convID }, { $set: { participants } })).modifiedCount;
  }
  // else remove the conv
  // TODO: remove conversation messages
  return !!(await mongo.conversations.deleteOne({ _id: convID })).deletedCount;
};

// ###################
// ### Fetch my Conversation
// ###################

export const fetchConversations = async ({ _id }: UserID): Promise<Conversation[]> => {
  const mongo = await mongoConnect();
  return mongo.conversations.find({ "participants._id": _id }).toArray();
};
