import { mongoConnect } from "helpers/mongo";
import { User } from "entity";
import { isPhoneNumber } from "class-validator";

const purePhoneNumber = (phone: string) => phone.replace(/[^+0-9]/g, "");

// ###################
// ### Create Account
// ###################

const PHONE_REGION = null;
const DEFAULT_VALUES = { lastVisite: new Date(), contacts: [], setting: {} };

interface UserData {
  phone: string;
  name?: string;
  actu?: string;
}

export const createUser = async (user: UserData): Promise<User> => {
  const mongo = await mongoConnect();
  const phone = purePhoneNumber(user.phone);
  // validate the phone number
  if (!isPhoneNumber(user.phone, PHONE_REGION)) throw new Error("invalid Phone number");
  if (await mongo.users.find({ phone }).count()) {
    throw new Error("Phone number already exists");
  }
  // insert user
  const buildUser = { ...user, phone, ...DEFAULT_VALUES, _id: undefined as any };
  const result = await mongo.users.insertOne(buildUser);
  return {
    ...buildUser,
    _id: result.insertedId,
  };
};

export const findUser = async (phoneNumber: string): Promise<User> => {
  const mongo = await mongoConnect();
  const phone = purePhoneNumber(phoneNumber);
  // validate the phone number
  if (!isPhoneNumber(phoneNumber, PHONE_REGION)) throw new Error("invalid Phone number");
  const user = await mongo.users.findOne({ phone });
  if (!user) throw new Error("Phone number does not exists");
  return user;
};

// ###################
// ### Add Contact
// ###################

interface ContactData {
  phone: string;
  name?: string;
}

export const addContact = async ({ _id }: User, { phone, name }: ContactData): Promise<User | undefined> => {
  const mongo = await mongoConnect();
  // validate the phone number
  if (!isPhoneNumber(phone, PHONE_REGION)) throw new Error("invalid Phone number");
  // fetch the tow users from DB
  const [user, contact] = await Promise.all([
    mongo.users.findOne({ _id }),
    mongo.users.findOne({ phone: purePhoneNumber(phone) }),
  ]);

  // validation
  if (!user) throw new Error("This user number doesn't exists");
  if (!contact) throw new Error("This contact number doesn't exists");
  if (contact.phone === user.phone) throw new Error("You can't add yourself");
  if (user.contacts.find((c) => c._id.toString() === contact._id.toString())) {
    throw new Error("This number already exists in your contacts");
  }

  const contacts = [...user.contacts, { ...contact, name: name || contact.name, ...DEFAULT_VALUES }];
  const result = await mongo.users.updateOne({ _id }, { $set: { contacts } });

  if (!result.modifiedCount) return;

  return {
    ...user,
    contacts,
  };
};

// ###################
// ### Delete Contact
// ###################
// Todo: check conversations
export const deleteContact = async ({ _id }: User, { _id: contactId }: User): Promise<User | undefined> => {
  const mongo = await mongoConnect();
  // fetch the tow users from DB
  const user = await mongo.users.findOne({ _id });

  if (!user) throw new Error("This user number doesn't exists");
  // validation
  const contact = user.contacts.find((c) => c._id.toString() === contactId.toString());
  if (!contact) throw new Error("This contact number doesn't exists in your contacts");

  const contacts = user.contacts.filter((c) => c._id.toString() !== contactId.toString());
  const result = await mongo.users.updateOne({ _id }, { $set: { contacts } });

  if (!result.modifiedCount) return;

  return {
    ...user,
    contacts,
  };
};
