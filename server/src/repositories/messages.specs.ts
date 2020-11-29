import { Conversation, User } from "entity";
import { mongoConnect, Mongo } from "helpers/mongo";
import { createConversation, deleteConversation, fetchConversations } from "./conversations";
import { createMessage, fetchMessages } from "./messages";
import { addContact, createUser, deleteContact } from "./users";

export default function messageRepositorySpec () {
  describe("mongo.messages", () => {
    const participants = [{ phone: "+212690444444" }, { phone: "+212690444455" }];
    const message = `message ${Date.now()}`;
    let conversation: Conversation;
    let user1: User;
    let user2: User;

    beforeAll(async () => {
      const mongo = await mongoConnect();
      user1 = (await mongo.users.findOne({ phone: "+212690444444" })) || (await createUser({ phone: "+212690444444" }));
      user2 = (await mongo.users.findOne({ phone: "+212690444455" })) || (await createUser({ phone: "+212690444455" }));
      [conversation, ...[]] = await fetchConversations(user1);
    });

    // ###################
    // ### Create Message
    // ###################

    test("createMessage: should create a new Message", async () => {
      // probably gona throw "This number already exists in your contacts"
      await addContact(user1, { phone: "+(212)-690444455" }).catch(Boolean);
      conversation = conversation || (await createConversation(user1, user2));
      await expect(createMessage(conversation, user1, message)).resolves.toMatchObject({ message });
      await deleteContact(user1, user2).catch(Boolean);
    });

    // ###################
    // ### Fetch Messages
    // ###################
    test("fetchMessages: should return conversation's messages", async () => {
      await addContact(user1, { phone: "+(212)-690444455" }).catch(Boolean);
      conversation = conversation || (await createConversation(user1, user2));
      await expect(fetchMessages(conversation)).resolves.toMatchObject([{ message }]);
      await deleteContact(user1, user2).catch(Boolean);
    });
  });
}
