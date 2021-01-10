import { User } from "@shared/helpers";
import { mongoConnect, Mongo } from "helpers/mongo";
import { createConversation, deleteConversation, fetchConversations } from "./conversations";
import { addContact, createUser, deleteContact } from "./users";

export default function conversationRepositorySpec () {
  describe("mongo.conversations", () => {
    const participants = [{ phone: "+212690444444" }, { phone: "+212690444455" }];
    let mongo: Mongo;
    let user1: User;
    let user2: User;

    beforeAll(async () => {
      mongo = await mongoConnect();
      user1 = (await mongo.users.findOne({ phone: "+212690444444" })) || (await createUser({ phone: "+212690444444" }));
      user2 = (await mongo.users.findOne({ phone: "+212690444455" })) || (await createUser({ phone: "+212690444455" }));
    });

    // ###################
    // ### Create Conversation
    // ###################
    test("createConversation: should throw an error (This number doesn't exists in your contacts)", async () => {
      // probably gona throw "This contact number doesn't exists in your contacts"
      await deleteContact(user1, user2).catch(Boolean);
      await expect(createConversation(user1, user2)).rejects.toThrow("This number doesn't exists in your contacts");
      await expect(createConversation(user1, user1)).rejects.toThrow("You can't add yourself");
    });

    test("createConversation: should create new Conversations", async () => {
      // probably gona throw "This number already exists in your contacts"
      await addContact(user1, { phone: "+(212)-690444455" }).catch(Boolean);
      await expect(createConversation(user1, user2)).resolves.toMatchObject({ participants });
      await deleteContact(user1, user2).catch(Boolean);
    });

    test("createConversation: should throw an error  (This contact number doesn't exists)", async () => {
      const error = "This contact number doesn't exists";
      await expect(createConversation(user1, { _id: "+212690444455" })).rejects.toThrow(error);
      await expect(createConversation(user1, { _id: "+(212)690444455" })).rejects.toThrow(error);
    });

    // ###################
    // ### Fetch Conversations
    // ###################
    test("fetchConversations: should return user's conversations", async () => {
      await expect(fetchConversations(user1)).resolves.toMatchObject([{ participants }]);
      await expect(fetchConversations(user2)).resolves.toMatchObject([{ participants }]);
    });

    // ###################
    // ### Delete Conversations
    // ###################
    test("deleteConversation", async () => {
      const [conversation, ...rest] = await fetchConversations(user1);
      await expect(deleteConversation(user1, conversation)).resolves.toBe(true);
      await expect(deleteConversation(user2, conversation)).rejects.toThrow("This conversation doesn't exists");
      await expect(deleteConversation({ _id: "+(212)690444455" }, conversation)).rejects.toThrow(
        "This user doesn't exists",
      );
    });
  });
}
