import { User } from "entity";
import { mongoConnect, Mongo } from "helpers/mongo";
import { addContact, createUser, deleteContact } from "./users";

export default function userRepositorySpec () {
  describe("mongo.users: Create Account", () => {
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
    test("createUser: should create new user", async () => {
      await expect(createUser({ phone: "+212690444444" })).resolves.toMatchObject({ phone: "+212690444444" });
      await expect(createUser({ phone: "+(212)-690444455" })).resolves.toMatchObject({ phone: "+212690444455" });
    });

    test("createUser: should throw an error  (invalid Phone number)", async () => {
      await expect(createUser({ phone: "2321342342332" })).rejects.toThrow("invalid Phone number");
      await expect(createUser({ phone: "212690444455" })).rejects.toThrow("invalid Phone number");
      await expect(createUser({ phone: "0690444455" })).rejects.toThrow("invalid Phone number");
      await expect(createUser({ phone: "+(169)-0444455" })).rejects.toThrow("invalid Phone number");
    });

    test("createUser: should throw an error  (existing phone number)", async () => {
      await expect(createUser({ phone: "+212690444444" })).rejects.toThrow("Phone number already exists");
      await expect(createUser({ phone: "+212690444455" })).rejects.toThrow("Phone number already exists");
      await expect(createUser({ phone: "+(212)690444455" })).rejects.toThrow("Phone number already exists");
    });
  });

  describe("mongo.users: Contact", () => {
    let mongo: Mongo;

    beforeAll(async () => {
      mongo = await mongoConnect();
    });

    // ###################
    // ### Add Contact
    // ###################
    test("addContact: should create new contact", async () => {
      const user = await mongo.users.findOne({ phone: "+212690444444" });
      expect(user).toMatchObject({ phone: "+212690444444" });
      await expect(addContact(user as User, { phone: "+(212)-690444455" })).resolves.toMatchObject({
        phone: "+212690444444",
        contacts: [{ phone: "+212690444455" }],
      });
      await expect(addContact(user as User, { phone: "+212690444444" })).rejects.toThrow("You can't add yourself");
    });

    test("addContact: should throw an error  (invalid Phone number)", async () => {
      const user = await mongo.users.findOne({ phone: "+212690444444" });
      expect(user).toMatchObject({ phone: "+212690444444" });
      await expect(addContact(user as User, { phone: "2321342342332" })).rejects.toThrow("invalid Phone number");
      await expect(addContact(user as User, { phone: "212690444455" })).rejects.toThrow("invalid Phone number");
      await expect(addContact(user as User, { phone: "0690444455" })).rejects.toThrow("invalid Phone number");
      await expect(addContact(user as User, { phone: "+(169)-0444455" })).rejects.toThrow("invalid Phone number");
    });

    test("addContact: should throw an error  (This number already exists in your contact)", async () => {
      const error = "This number already exists in your contact";
      const user = await mongo.users.findOne({ phone: "+212690444444" });
      expect(user).toMatchObject({ phone: "+212690444444" });

      await expect(addContact(user as User, { phone: "+212690444455" })).rejects.toThrow(error);
      await expect(addContact(user as User, { phone: "+(212)690444455" })).rejects.toThrow(error);
    });

    // ###################
    // ### Delete Contact
    // ###################
    test("deleteContact: should delete contact", async () => {
      const user = await mongo.users.findOne({ phone: "+212690444444" });
      expect(user).toMatchObject({ phone: "+212690444444" });
      await expect(deleteContact(user as User, user?.contacts[0] as User)).resolves.toMatchObject({
        phone: "+212690444444",
        contacts: [],
      });
    });

    test("deleteContact: should throw an error  (This contact number doesn't exists)", async () => {
      const error = "This contact number doesn't exists";
      const user = await mongo.users.findOne({ phone: "+212690444444" });
      expect(user).toMatchObject({ phone: "+212690444444" });

      await expect(deleteContact(user as User, { _id: "+212690444455" } as User)).rejects.toThrow(error);
      await expect(deleteContact(user as User, { _id: "+(212)690444455" } as User)).rejects.toThrow(error);
    });
  });
}
