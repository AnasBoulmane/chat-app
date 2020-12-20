import React, { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

export interface IRootContext {
  socket: Socket;
  user?: any;
  setUser: React.Dispatch<React.SetStateAction<any>>;
  contacts: any[];
  setContacts: React.Dispatch<React.SetStateAction<any[]>>;
  conversation?: any;
  setConversation: React.Dispatch<React.SetStateAction<any>>;
  conversations: any[];
  setConversations: React.Dispatch<React.SetStateAction<any[]>>;
}

export const initRootContext: IRootContext = {
  socket: io("localhost:8000"),
  user: undefined,
  contacts: [],
  conversations: [],
  conversation: undefined,
  setConversations: () => {},
  setConversation: () => {},
  setContacts: () => {},
  setUser: () => {},
};

function useStore (): IRootContext {
  const { socket } = initRootContext;
  const [user, setUser] = useState();
  const [contacts, setContacts] = useState<any[]>([]);
  const [conversation, setConversation] = useState();
  const [conversations, setConversations] = useState<any[]>([]);

  useEffect(
    () => () => {
      socket.disconnect();
      socket.close();
    },
    [socket],
  );

  return {
    socket,
    user,
    contacts,
    conversation,
    conversations,
    setConversations,
    setConversation,
    setContacts,
    setUser,
  };
}

export const RootContext = React.createContext<IRootContext>(initRootContext);

export const RootContextProvider = ({ children }: any) => {
  const value: IRootContext = useStore();
  return <RootContext.Provider value={value}>{children}</RootContext.Provider>;
};
