// ###############
// # users
// ###############

export interface User {
  _id: string;
  name?: string;
  actu?: string;
  phone: string;
  contacts: User[];
  lastVisite: Date;
  setting: any;
}

// ###############
// # Conversations
// ###############

export interface Participant {
  _id: string; // user ID
  phone: string;
  actu?: string;
  alias?: string;
  setting: any;
}

export interface Conversation {
  _id: string;
  name?: string;
  participants: Participant[];
  type?: "group";
  setting: any;
  lastMessage?: Message;
}

// ###############
// # Messages
// ###############

export enum MessageState {
  Error = "error",
  Sended = "sended",
  Received = "received",
}

export interface Message {
  _id: string;
  message: string;
  sender: string;
  conversation: string;
  timestamp: Date;
  state: MessageState;
}
